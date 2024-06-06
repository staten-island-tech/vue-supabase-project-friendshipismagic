<template>
<div>
 <h1 class="title">Game Page</h1>

<gameComp /></div>
</template>

<script setup>
import { supabase } from '../clients/supabase';
import gameComp from '../components/gameComp.vue'
import { ref } from "vue";
let clickCount = ref(0)

// async function updateClicks(){
//   const user = await supabase.auth.getSession();
//   clickCount.value++
//   try {
//     const { data, error } = await supabase
//     .from('profiles')
//     .update({ clicks: clickCount.value })
//     .eq('id', user.data.session.user.id)
//     .select()
//       if(data){
//         console.log(data)
//       }
//   } catch (error) {
//     console.log(error)
//   }
// }

// async function updateClicks(){
//   const user = await supabase.auth.getSession();
//   clickCount.value++
//     const { data, error } = await supabase
//     .from('profiles')
//     .upsert({ clicks: clickCount.value })
//     .eq('id', user.data.session.user.id)
//     .select()
//       console.log(data);
// }

// function clicked(){
//   clickCount.value++
// }

</script>

<style scoped>
.clicktoPunch{
    margin: 0%;
}

</style>