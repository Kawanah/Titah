
  # Site Web Agence Création

  This is a code bundle for Site Web Agence Création. The original project is available at https://www.figma.com/design/1Yoy50oxEGQRUEquksw43o/Site-Web-Agence-Cr%C3%A9ation.

  ## Running the code

Run `npm i` to install the dependencies.

Run `npm run dev` to start the development server.

## Configuration

Copy `.env.example` to `.env.local` (or export the variables in your CI/CD) before starting the dev server:

```
VITE_SUPABASE_URL=https://your-project-id.supabase.co
VITE_SUPABASE_ANON_KEY=your_public_anon_key
# Optional if you renamed the edge function path
VITE_SUPABASE_FUNCTION_PATH=/functions/v1/make-server-2fc91c13
```

For the Supabase edge function, configure the following secrets with the Supabase CLI (you can use `scripts/set_supabase_secrets.sh` after exporting the variables):

```
supabase secrets set ADMIN_SECRET_TOKEN=change_me_now
supabase secrets set ALLOWED_ORIGINS=http://localhost:5173,https://your-domain.com
supabase secrets set SUPABASE_URL=https://your-project-id.supabase.co
supabase secrets set SUPABASE_SERVICE_ROLE_KEY=service_role_key_here
```

> Rotate any keys that were previously committed in the repository.
  
