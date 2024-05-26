<template>
    <div class="about">
        <h1 class="title">Account Information</h1>
        <div class="accountInfoContainer">
        <p id="account"> 

            E-mail: {{ account.data.session.user.email}} <br>
            User Name: {{ account.data.session.user.user_metadata.user_name}} <br>
            Created At: {{ account.data.session.user.created_at }}
        </p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { supabase } from '../clients/supabase';
import { ref } from "vue";

const account = ref();
getSession();

async function getSession(){
    account.value = await supabase.auth.getSession();
}


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