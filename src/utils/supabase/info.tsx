const toTrimmedString = (value: string | undefined) => value?.trim() ?? "";
const toUrlSafeString = (value: string | undefined) =>
  toTrimmedString(value).replace(/\/+$/, "");

export const supabaseUrl = toUrlSafeString(import.meta.env.VITE_SUPABASE_URL);
export const publicAnonKey = toTrimmedString(import.meta.env.VITE_SUPABASE_ANON_KEY);

const defaultFunctionPath = "/functions/v1/make-server-2fc91c13";
const rawFunctionPath = toUrlSafeString(import.meta.env.VITE_SUPABASE_FUNCTION_PATH);
const functionPath = (() => {
  const path = rawFunctionPath || defaultFunctionPath;
  return path.startsWith("/") ? path : `/${path}`;
})();

export const supabaseFunctionsBaseUrl = supabaseUrl
  ? `${supabaseUrl}${functionPath}`
  : "";

if (!supabaseUrl || !publicAnonKey) {
  console.warn(
    "[Titah] Supabase credentials are missing. Please set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in your environment.",
  );
}
