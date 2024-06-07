<template>
    <div class="about" >
        <h1 class="title">Account Information</h1>
        <div class="accountInfoContainer">
        <p id="account"> 
            E-mail: {{ account.data.user?.email}} <br> 
            User Name: {{ account.data.user?.user_metadata.user_name}} <br>
            Created At: {{ account.data.user?.created_at }}
            <!-- the question mark after user means that the the app will look for a user's data to display. \
            If there's a user logged in, it'll display their data. If not, it'll just come up as blank fields -->
        </p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { supabase } from '../clients/supabase';
import { ref } from "vue";

const account = ref();

async function getUser(){
    account.value = await supabase.auth.getUser();
}
getUser(); //just looks for the current user's data

</script>

<style scoped>
.accountInfoContainer{
    background-color: beige;
    border-radius: 1rem;
    border-color: #8aa956;
}
#account {
    color: #8aa956;
}
.title{
    text-decoration: underline;
}
</style>