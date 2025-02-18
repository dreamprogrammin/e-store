import { createClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.NUXT_PUBLIC_SUPABASE_URL! 
const supabaseKey = process.env.NUXT_PUBLIC_SUPABASE_KEY!


export default defineNuxtPlugin((nuxtApp) => {
    const supabase = createClient(supabaseUrl, supabaseKey)
    nuxtApp.provide('supabase', supabase)
})