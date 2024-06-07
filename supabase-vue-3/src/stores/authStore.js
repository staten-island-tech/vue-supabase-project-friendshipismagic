import router from '../router/index'
import { defineStore } from 'pinia'
import { ref } from "vue";
import { createClient } from '@supabase/supabase-js'


export const useLoginStore = defineStore("loginStore", {
    state: () => {
        return {login : 0} //basic value is that user is not logged in
    },

    actions: {
        loggedIn(){
            this.login === 1
            console.log('log in 1') //1 means the user is logged in
        },
        loggedOut(){
            this.login === 0
            console.log('log out 0') //0 means the user is logged out
        }
    }
}) //assigns the value of login to 0 or 1 to show whether or not the user is logged in

export const useClicksStore = defineStore("clickStore", {
    state: () => {
        return {punches : 0}
    }, 
//sets punches as a prop that can be passed to a component
// I planned to display this number in gameComp to show how many clicks the current user has
//this store doesnt work rn
    actions: {
            async updateClicks(){
                const user = await supabase.auth.getSession();
                  let { data: profiles, error } = await supabase
                  .from('profiles')
                  .select("*")
                  .eq('id', user.data.session.user.id)
                  .select()
                  console.log(data);
                  this.punches = profiles[0].clicks;
              }
    } //this is supposed to be for updating the punches variable in the state to be up to date with how many clicks the current user has listed on supabase

})