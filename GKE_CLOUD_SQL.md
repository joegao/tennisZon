# GKE and Cloud SQL IAM deployment

The application connects to PostgreSQL on `127.0.0.1:5432`. In GKE, the Cloud SQL Auth Proxy sidecar opens that local port, obtains short-lived IAM credentials, and creates an encrypted connection to Cloud SQL. No database password or service account key is stored in the repository.

## 1. Prepare Cloud SQL

Enable IAM database authentication and create the application database if they do not exist:

```bash
export PROJECT_ID="project-b8eb1b3e-fa96-470b-9f2"

gcloud sql instances patch tenniszon-db \
  --database-flags=cloudsql.iam_authentication=on

gcloud sql databases create tenniszon \
  --instance=tenniszon-db

gcloud sql users create "tenniszon-gke@${PROJECT_ID}.iam" \
  --instance=tenniszon-db \
  --type=cloud_iam_service_account
```

Commands that report an existing database, user, or flag can be skipped.

Connect once as `postgres` and allow the IAM user to run Flyway migrations and access application tables:

```bash
gcloud sql connect tenniszon-db --user=postgres --database=tenniszon
```

```sql
GRANT CONNECT ON DATABASE tenniszon
TO "tenniszon-gke@project-b8eb1b3e-fa96-470b-9f2.iam";

GRANT USAGE, CREATE ON SCHEMA public
TO "tenniszon-gke@project-b8eb1b3e-fa96-470b-9f2.iam";
```

Flyway creates `products` and `flyway_schema_history` during the first application startup. The IAM user owns those tables, so no additional table grants are needed.

## 2. Configure Workload Identity

The Google service account needs `roles/cloudsql.client` and `roles/cloudsql.instanceUser`. Bind the Kubernetes service account from `k8s/tenniszon.yaml` to it:

```bash
gcloud iam service-accounts add-iam-policy-binding \
  "tenniszon-gke@${PROJECT_ID}.iam.gserviceaccount.com" \
  --role="roles/iam.workloadIdentityUser" \
  --member="serviceAccount:${PROJECT_ID}.svc.id.goog[tenniszon/tenniszon]"
```

For a Standard GKE cluster, ensure Workload Identity Federation is enabled on the cluster. Autopilot clusters already enable it.

## 3. Build and deploy

Create an Artifact Registry repository once:

```bash
gcloud artifacts repositories create tenniszon \
  --repository-format=docker \
  --location=northamerica-northeast1
```

Build the image in Cloud Build and deploy it:

```bash
gcloud builds submit \
  --tag "northamerica-northeast1-docker.pkg.dev/${PROJECT_ID}/tenniszon/tenniszon:latest"

kubectl apply -f k8s/tenniszon.yaml
kubectl rollout status deployment/tenniszon -n tenniszon
kubectl get service tenniszon -n tenniszon
```

Inspect startup and proxy logs if the pod does not become ready:

```bash
kubectl logs deployment/tenniszon -n tenniszon -c application
kubectl logs deployment/tenniszon -n tenniszon -c cloud-sql-proxy
```

If Cloud SQL uses private IP only, add `--private-ip` to the proxy arguments. The GKE cluster must be VPC-native and connected to the same VPC.
