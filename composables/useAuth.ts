import { useAuthStore } from "~/stores/auth";
import { useNuxtApp } from "#app";

export const useAuth = () => {
    const authStore = useAuthStore()
    const {$supabase} = useNuxtApp()

    async function signUp (email: string, password:string) {
        const {data, error} = await $supabase.auth.signUp({email, password})
        if (error) throw error
        authStore.setUser(data.user)
    }

    async function signIn (email:string, password: string) {
        const {data, error} = await $supabase.auth.signInWithPassword({email, password})
        if (error) throw error
        authStore.setUser(data.user)
    }

    async function signOut () {
        const { error} = await $supabase.auth.signOut()
        if (error) throw error
        authStore.clearUser()
    }
    
    return {
        user: authStore.user, isLoggedIn: authStore.isLoggedIn, signIn, signUp, signOut
    }
}