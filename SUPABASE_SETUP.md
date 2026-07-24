# Supabase product setup

## 1. Create and seed the table

Open your Supabase project, go to **SQL Editor**, and run:

```sql
-- paste the full contents of supabase/products.sql here
```

The script creates `public.products`, enables RLS, allows public read access, and inserts the current TennisZon product catalog.

## 2. Configure local environment variables

Use your Supabase project URL and anon key:
Use your Supabase project URL and publishable key:

```powershell
$env:SUPABASE_URL="https://your-project-ref.supabase.co"
$env:SUPABASE_PUBLISHABLE_KEY="your-supabase-publishable-key"
```

The React app does not receive the Supabase key directly. Spring Boot reads Supabase on the server side through `/api/products`.

## 3. Run the app

```powershell
cd C:\develop\tennisZon
java -jar build\libs\tennis-zon-0.0.1-SNAPSHOT.jar --server.port=18080
```

Then open:

```text
http://127.0.0.1:18080/
```

If products do not load, check that both environment variables are set and that `supabase/products.sql` has been run successfully.
