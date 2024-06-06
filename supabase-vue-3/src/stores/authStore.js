import router from '../router/index'
import { defineStore } from 'pinia'
import { ref } from "vue";
import { createClient } from '@supabase/supabase-js'

export const useAuthStore = defineStore("authStore", () => {
    const user = ref(null);
    const session = ref(null);
    const loggedIn = ref(false);

    const supabase = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_ANON_KEY)
    console.log(supabase);

    const { data } = supabase.auth.onAuthStateChange((event, session) => {
        console.log(event, session)
        if(session){
            user.value = session.user;
        } else {
            session.user = null
        }
        if(loggedIn.value = user.value){
            const loggedIn = ref(true)
        } else {
            const loggedIn = ref(false)
        }
    });

    async function login ({email, password}) {
        return await supabase.auth.signInWithPassword({
        email,
        password
    });
    };
    
    async function createAccount({email, password, username}){
        return await supabase.auth.signUp({
            email,
            password,
            username
    });
};
    return {login, createAccount, session, user, loggedIn}
});