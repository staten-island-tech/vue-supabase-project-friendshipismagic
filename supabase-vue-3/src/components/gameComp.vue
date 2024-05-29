<template>
 <div class="clicktoPunch">
  <img src="../assets/logo.png" @click="updateClicks" />
        <br>
<img class ="punchIcon" src="../assets/punch.png" alt="punch"> </div>
  <p>Punches: ${clickCount}</p>
</template>

<script setup lang="ts">
import { supabase } from '../clients/supabase';
import { ref } from "vue";
import { useCounterStore } from '../stores/store'
let clickCount = ref(0)
const { increaseClicks } = store

async function updateClicks(){
  const user = await supabase.auth.getSession();
  increaseClicks();
    const { data, error } = await supabase
    .from('profiles')
    // .update({ clicks: clickCount.value })
    .select('clicks')
    .eq('id', user.data.session.user.id)
    .select()
      console.log(data);
}

// async function increaseClicks(){
//   const { data } = await supabase.rpc('increaseClicksby1')
//   console.log(data)
//   clickCount = data
// }

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