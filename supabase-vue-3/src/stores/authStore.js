import router from '../router/index'
import { defineStore } from 'pinia'
import { ref } from "vue";
import { createClient } from '@supabase/supabase-js'

export const useAuthStore = defineStore("authStore", () => {
    const user = ref(null);
    const session = ref(null);
    const loggedIn = ref(false);
    const clickValue = ref(0)

    const supabase = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_ANON_KEY)
    // console.log(supabase);

    const { data } = supabase.auth.onAuthStateChange((event, session) => {
        user.value = session ? session.user : null;
        loggedIn.value = user.value ? true : false;
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

    async function fetchClicks(){
            const user = await supabase.auth.getUser();
            const { data, error } = await supabase
            .from('profiles')
            .select('clicks')
            .eq('id', user.data.session.user.id)
            .select()
            this.clickValue = data[0].clicks
    }
    return {login, createAccount, session, user, loggedIn, clickValue, fetchClicks}
});