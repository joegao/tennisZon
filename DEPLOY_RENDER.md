# Deploy TennisZon to Render

## 1. Initialize the Supabase table

Open Supabase SQL Editor and run:

```text
supabase/products.sql
```

## 2. Commit and push to GitHub

```powershell
cd C:\develop\tennisZon
git init
git add .
git commit -m "Prepare Render deployment"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/tennis-zon.git
git push -u origin main
```

Create the empty GitHub repository before running `git remote add origin`.

## 3. Create the Render service

In Render:

1. Click `New +`.
2. Choose `Blueprint`.
3. Connect the GitHub repository.
4. Select this repo.
5. Render reads `render.yaml` and creates the Docker web service.

Render will build the React app, package Spring Boot, and start the service with the `PORT` environment variable it provides.

## 4. Manual setup alternative

If you choose `Web Service` instead of `Blueprint`:

```text
Runtime: Docker
Dockerfile Path: ./Dockerfile
Docker Context: .
Health Check Path: /
```

Add these environment variables in Render if they are not picked up from `render.yaml`:

```text
SUPABASE_URL=https://dpzgzgmrdepsthbpihyl.supabase.co
SUPABASE_PUBLISHABLE_KEY=sb_publishable_Cn0BqOA7bzTQkk7zEpATQA_GqOzCSXA
```

## 5. Your Render URL

After deploy, Render gives you a URL like:

```text
https://tennis-zon.onrender.com
```
