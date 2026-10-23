const SUPABASE_URL = "https://ivxouumrbqrguxoqcpqq.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_BNE4MiHGPJbho-b_CkE-Iw_gB7fsgEZ";

const supabaseClient = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_PUBLISHABLE_KEY
);

window.supabaseClient = supabaseClient;
