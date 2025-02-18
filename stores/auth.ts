import { defineStore } from "pinia";
import type { User } from "@supabase/supabase-js";

export  const useAuthStore = defineStore('auth', () => {
    const user = ref<User | null >(null)

    const isLoggedIn = () => !!user.value
    
    const setUser = (dataUser : User | null) => {
        user.value = dataUser
    }

    const clearUser = () => {
        user.value = null
    }

    return {
        user,
        isLoggedIn,
        setUser,
        clearUser
    }
}) 