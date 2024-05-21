<template>
<div>

<h1 class="title">Login</h1>
<p>If you are signing up, please put in an e-mail, password, and a username. Your password must be at least 6 characters. <br>
     If you are logging in, using your e-mail is sufficient. </p>
<div class="hugeContainer">
    <div class="loginForm">
        <label for="email">Email: </label>
        <input type="email" id="email" v-model="email">
    <br>
        <label for="password">Password: </label>
        <input type="password" id="password" v-model="password">
    <br>
        <label for="name">User Name: </label>
        <input type="name" id="name" v-model="username">
 </div>

        <div class="buttoooons">
    <button @click="createAccount">Create Account</button>
    <button @click="login">Log In</button>
    <button @click="logout">Log Out</button>
        </div>
   </div>
</div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { supabase } from "../clients/supabase";

let email = ref("");
let password = ref("");
let username = ref("");

async function createAccount(){
    const { data, error } = await supabase.auth.signUp({
        email: email.value,
        password: password.value,
        options: {
            data: {
                user_name: username.value,
                click_count: ref(0)
            }
        } 
    })
    if (error) {
        console.log(error)
    }
    else {
        alert("Account created! Please check your e-mail to verify your e-mail.")
    }
}

async function login(){
    const { data, error } = await supabase.auth.signInWithPassword({
        email: email.value,
        password: password.value
    })
    if (error) {
        console.log(error)
        alert("Please try again")
    }
    else {
        alert("Login was a success!")
        const localUser = await supabase.auth.getSession();
        console.log(localUser);
    }
}


async function logout(){
    const { error } = await supabase.auth.signOut();
    if (error) {
        console.log(error)
        alert("Sorry, couldn't do that")
    }
    else {
        alert("Logout was a success!")
    }
}
</script>

<style scoped>
.title{
    text-decoration: underline;
}
.loginForm{
    margin-bottom: 5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    
}
.hugeContainer{
    background-color: beige;
    border-radius: 1rem;
    border-color: #8aa956;
    padding: 2rem;
}
.buttoooons{
  display: flex;
  justify-content: space-around;
}
button{
    background-color:  #FEF5EA;
}
</style>