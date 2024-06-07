<template>
<div class="page">
 <div class="clicktoPunch">
  <img src="../assets/logo.png" @click="increaseClicks" />
        <br>
<img class ="punchIcon" src="../assets/punch.png" alt="punch"> 
</div>
   <p>Punches: {{store.punches}} </p>
  </div>
</template>

<script setup >
import { supabase } from '../clients/supabase';
import { ref } from "vue";
import { useClicksStore } from "../stores/authStore";

const store = useClicksStore(); 


async function increaseClicks(){
  const { data } = await supabase.rpc('increaseClicksby1') //calls the function that I made in supa to update the mathcing row 
  console.log(data)
} //updates the table in supabase everytime you click

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