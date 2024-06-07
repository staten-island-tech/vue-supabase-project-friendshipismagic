<template>
<div class="page">
 <div class="clicktoPunch">
  <img src="../assets/logo.png" @click="updateClicks" />
        <br>
<img class ="punchIcon" src="../assets/punch.png" alt="punch"> 
</div>
   <p>Punches: {{store.punches}} </p>
  </div>
</template>

<script setup >
import { supabase } from '../clients/supabase';
import { ref } from "vue";
import { useLoginStore } from "../stores/authStore";

const store = useLoginStore();


// async function updateClicks(){
//   const user = await supabase.auth.getSession();
//   increaseClicks();
//     const { data, error } = await supabase
//     .from('profiles')
//     // .update({ clicks: clickCount.value })
//     .select('clicks')
//     .eq('id', user.data.session.user.id)
//     .select()
//       console.log(data);
// }

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