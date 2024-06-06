<template>
 <div class="clicktoPunch">
  <img src="../assets/logo.png" @click="increaseClicks" />
        <br>
<img class ="punchIcon" src="../assets/punch.png" alt="punch"> 
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
  animation: shake 0.1s linear 1;
}
@keyframes shake {
  0% {
    rotate: 0deg;
  }

  33% {
    rotate: 10deg;
    scale: 110%;
  }

  66% {
    rotate: -10deg;
    scale: 120%;
  }

  100% {
    rotate: 10deg;
    scale: 110%;
  }
}
</style>