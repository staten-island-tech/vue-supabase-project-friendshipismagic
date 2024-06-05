import { defineStore } from 'pinia'

export const useAuthStore = defineStore("auth-store", () => {
    const user = ref(null);
    isLoggedIn = ref(false);

    const login = async ({email, password}) => {
        return null;
    };

    return {login, user, isLoggedIn}

});