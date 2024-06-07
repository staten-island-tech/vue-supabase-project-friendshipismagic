<template>
<div class="page">
 <div class="clicktoPunch">
  <img src="../assets/logo.png" @click="increaseClicks" />
        <br>
<img class ="punchIcon" src="../assets/punch.png" alt="punch"> 
</div>
   <p>Punches: {{store.punches}} </p> 
   <!-- tried to display the punch value from the store but it doesnt work -->
  </div>
</template>

<script setup >
import { supabase } from '../clients/supabase';
import { ref } from "vue";
import { useClicksStore } from "../stores/authStore"; //importing the store

const store = useClicksStore(); //I tried to get the number of punches from the store to display


async function increaseClicks(){
  const { data } = await supabase.rpc('increaseClicksby1') 
  //calls the rpc function that I made in Supabase to update the clicks column where the IDs match
  console.log(data)
} //updates the matching column in supabase everytime you click

</script>

<style scoped>
.title{
    text-decoration: underline;
}
.clicktoPunch{
    margin: 0%;
}
.clicktoPunch:active{
    animation: wobble 0.1s ease infinite;
}
@keyframes wobble {
  0% { transform: translateX(0%); }
  45% { transform: translateX(-1%) rotate(-3deg); } 
  60% { transform: translateX(1%) rotate(2deg); }
  100% { transform: translateX(0%); }
}
</style>