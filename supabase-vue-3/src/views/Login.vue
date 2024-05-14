<template>
<div>

<h1>Login</h1>

<div class="inputContainer">
    <label for="email">Email: </label>
    <input type="email" id="email" v-model="email">
</div>

<div class="inputContainer">
    <label for="password">Password: </label>
    <input type="password" id="password" v-model="password">
</div>

<div class="buttonContainer">
    <button @click="createAccount">Create</button>
    <button @click="login">Login</button>
    <button @click="seeCurrentUser">See user</button>
    <button @click="logout">Logout</button>
</div>

</div>
</template>

<script setup>
import { ref } from "vue";
import { supabase } from "../clients/supabase";

let email = ref("");
let password = ref("");

async function createAccount(){
    const { data, error } = await supabase.auth.signUp({
        email: email.value,
        password: password.value
    })
    if (error) {
        console.log(error)
    }
    else {
        console.log(data)
    }
}

function login(){
    console.log("login")
}

function seeCurrentUser(){
    console.log("see current user")
}

function logout(){
    console.log("logout")
}
</script>

<style lang="scss" scoped>

</style>