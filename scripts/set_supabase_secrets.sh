#!/usr/bin/env bash
set -euo pipefail

if ! command -v supabase >/dev/null 2>&1; then
  echo "❌ Supabase CLI introuvable." >&2
  exit 1
fi

missing=()
[[ -z "${ADMIN_SECRET_TOKEN:-}" ]] && missing+=("ADMIN_SECRET_TOKEN")
[[ -z "${SUPABASE_URL:-}" ]] && missing+=("SUPABASE_URL")
[[ -z "${SUPABASE_SERVICE_ROLE_KEY:-}" ]] && missing+=("SUPABASE_SERVICE_ROLE_KEY")
[[ -z "${ALLOWED_ORIGINS:-}" ]] && missing+=("ALLOWED_ORIGINS")

if ((${#missing[@]} > 0)); then
  echo "❌ Variables manquantes: ${missing[*]}" >&2
  exit 1
fi

supabase secrets set \
  ADMIN_SECRET_TOKEN="$ADMIN_SECRET_TOKEN" \
  SUPABASE_URL="$SUPABASE_URL" \
  SUPABASE_SERVICE_ROLE_KEY="$SUPABASE_SERVICE_ROLE_KEY" \
  ALLOWED_ORIGINS="$ALLOWED_ORIGINS"

echo "✅ Secrets mis à jour."
