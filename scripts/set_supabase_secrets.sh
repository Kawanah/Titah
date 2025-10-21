#!/usr/bin/env bash

set -euo pipefail

if ! command -v supabase >/dev/null 2>&1; then
  echo "❌ Supabase CLI introuvable. Installez-le via 'npm install -g supabase'." >&2
  exit 1
fi

ADMIN_SECRET_TOKEN=${ADMIN_SECRET_TOKEN:-}
SUPABASE_URL=${SUPABASE_URL:-}
SUPABASE_SERVICE_ROLE_KEY=${SUPABASE_SERVICE_ROLE_KEY:-}
ALLOWED_ORIGINS=${ALLOWED_ORIGINS:-"http://localhost:5173,https://titah.fr"}

missing=()
[[ -z "$ADMIN_SECRET_TOKEN" ]] && missing+=("ADMIN_SECRET_TOKEN")
[[ -z "$SUPABASE_URL" ]] && missing+=("SUPABASE_URL")
[[ -z "$SUPABASE_SERVICE_ROLE_KEY" ]] && missing+=("SUPABASE_SERVICE_ROLE_KEY")

if ((${#missing[@]} > 0)); then
  echo "❌ Variables requises manquantes: ${missing[*]}" >&2
  echo "   Exportez-les avant d'exécuter le script, par exemple:" >&2
  echo "     export ADMIN_SECRET_TOKEN=\"token-ultra-secret\"" >&2
  echo "     export SUPABASE_URL=\"https://your-project-id.supabase.co\"" >&2
  echo "     export SUPABASE_SERVICE_ROLE_KEY=\"service-role-key\"" >&2
  exit 1
fi

echo "⏳ Configuration des secrets Supabase..."
supabase secrets set \
  ADMIN_SECRET_TOKEN="$ADMIN_SECRET_TOKEN" \
  SUPABASE_URL="$SUPABASE_URL" \
  SUPABASE_SERVICE_ROLE_KEY="$SUPABASE_SERVICE_ROLE_KEY" \
  ALLOWED_ORIGINS="$ALLOWED_ORIGINS"

echo "✅ Secrets Supabase mis à jour."
echo "   Pensez à redéployer la fonction edge :"
echo "     supabase functions deploy make-server-2fc91c13"
