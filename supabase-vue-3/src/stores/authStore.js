import router from '../router/index'
import { defineStore } from 'pinia'
import { ref } from "vue";
import { createClient } from '@supabase/supabase-js'


export const useLoginStore = defineStore("loginStore", {
    state: () => {
        return {login : 0}
    },

    actions: {
        loggedIn(){
            this.login === 1
            console.log('log in 1')
        },
        loggedOut(){
            this.login === 0
            console.log('log out 0')
        }
    }
})

export const useAuthStore = defineStore("authStore", () => {
    const user = ref(null);
    const session = ref(null);
    // const loggedIn = ref(0);
    // const clickValue = ref(0)

    const supabase = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_ANON_KEY)
    // console.log(supabase);

    // const { data } = supabase.auth.onAuthStateChange((event, session) => {
    //     user.value = session ? session.user : null;
    //     loggedIn.value = user.value ? true : false;
    // });

    // function loggedIn(){
    //     const loggedIn = ref(1)
    // };

    // function loggedOut(){
    //     const loggedIn = ref(0)
    // };

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

    return {login, createAccount, session, user}
});