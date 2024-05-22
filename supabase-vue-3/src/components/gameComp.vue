<template>
  <div>
    <h1 class="title">Game Page</h1>
  </div>
  <img src="../assets/logo.png" @click="clickCounter" />
  <p>Punches: {{ account.data.session.user.user_metadata.click_count }} </p>
</template>

<script setup lang="ts">
import { ref, computed, onBeforeMount } from 'vue';
import { supabase } from "../clients/supabase"
const count = ref(0)
const account = ref('');
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
// async function getSession(){
//     account.value = await supabase.auth.getSession();
//     console.log(account.value.)
// }

// async function getCount(){

// }


async function clickCounter(){
  count.value++
  const {data} = await supabase.auth.updateUser({click_count:'count.value'});
};
// async function clickCounter(){
// const { user, error } = await supabase.auth.update({
//   data: { click_count: 'count.value' }
// });
// };

// async function clickCounter(){
//   count.value++
//     const { data, error } = await supabase.auth.updateUser(

//     )
// }

</script>

<style scoped>
.title{
    text-decoration: underline;
}
img:active{
  scale: 120%;
}
</style>