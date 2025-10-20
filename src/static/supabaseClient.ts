import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  import.meta.env.VITE_PROJECT_URL,
  import.meta.env.VITE_API_KEY
);

// export const supabaseDB = createClient(
//   import.meta.env.VITE_CONNECTIONS_DB,
//   import.meta.env.VITE_API_KEY
// )