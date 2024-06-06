<template>
<div class="page">
 <div class="clicktoPunch">
  <img src="../assets/logo.png" @click="increaseClicks" />
        <br>
<img class ="punchIcon" src="../assets/punch.png" alt="punch"> 
</div>
  <p>Punches: </p>
  
  </div>
</template>

<script setup >
import { supabase } from '../clients/supabase';
import { ref } from "vue";
// import { useAuthStore } from '../stores/authStore'
let clickCount = ref(0)
// const { increaseClicks } = store
// const authStore = useAuthStore();

// async function updateClicks(){
//   const user = await supabase.auth.getSession();
//   increaseClicks();
//     const { data, error } = await supabase
//     .from('profiles')
//     .select('clicks')
//     .eq('id', user.data.session.user.id)
//     .select()
//       // console.log(data);
// }

async function increaseClicks(){
  const { data } = await supabase.rpc('increaseClicksby1')
  console.log(data)
  clickCount = data
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