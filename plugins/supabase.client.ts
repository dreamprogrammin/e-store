import { createClient } from "@supabase/supabase-js";
import { useAuthStore } from "~/stores/auth";

const supabaseUrl = process.env.NUXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NUXT_PUBLIC_SUPABASE_KEY!;

const authStore = useAuthStore();

export default defineNuxtPlugin((nuxtApp) => {
  const supabase = createClient(supabaseUrl, supabaseKey);
  supabase.auth.onAuthStateChange((event, session) => {
    if (event === "SIGNED_IN") {
      authStore.setUser(session?.user || null);
    } else if (event === "SIGNED_OUT") {
      authStore.clearUser();
      console.log("hi");
    }
  });
  nuxtApp.provide("supabase", supabase);
});
