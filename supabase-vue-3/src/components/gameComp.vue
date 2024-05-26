<template>
  <div>
    <h1 class="title">Game Page</h1>
  </div>
  <img src="../assets/logo.png" />
  <p>Punches: </p>
</template>

<script setup lang="ts">
import { onMounted, ref, toRefs, watchEffect } from 'vue'
import { supabase } from "../supabase"

const props = defineProps(['session']);
const { session } = toRefs(props);

const loading = ref(true);
const username = ref('');
const email = ref('');
const clicks = ref(0);

// onMounted(() => {
//   getProfile()
// })
const { user } = session.value
//WATCH EFFECT???
watchEffect (() => {
  const clickValue = async () => {
    const { data } = await supabase
    .from("profiles")
    .select("clicks")
    .eq("id", user.id)
    .limit(1)
    .maybeSingle();

    console.log({ data })
  };
  clickValue();
} );
// async function getProfile() {
//   try {
//     loading.value = true
//     
  
//     const { data, error, status } = await supabase
//       .from("profiles")
//       .select("clicks")
//       .eq("id", user.id)
//       .limit(1)
//       .single()
//       console.log ({data})

//     if (error && status !== 406) throw error

//     if (data) {
//       clicks.value = data.clicks
//     }
//   } catch (error) {
//     alert(error.message)
//   } finally {
//     loading.value = false
//   }
// }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
// async function updateClicks() {
//   clicker_count.value++
//   try {
//     loading.value = true
//     const { user } = session.value

//     const updates = {
//       id: user.id,
//       clicker_count: 'clicker_count.value',
//     }
//     const { error } = await supabase.from('users').upsert(updates)

//     if (error) throw error
//   } catch (error) {
//     alert(error.message)
//   } finally {
//     loading.value = false
//   }
// }
// async function updateClicks(){
//   console.log(session.value)
// }

function increaseClicks () {
  clicks.value++
}
  // const { user } = session.value

// async function getProfile() { 
//     const { data, error, status } = await supabase
//       .from("profiles")
//       .select("clicks")
//       .eq('id', user.id)
//       .single()
//     console.log({ data })
//   }
  // getProfile();
// const getClicks = async function () {
//   const {data} = await supabase.from('profiles').select('clicks').eq('id', user.id)
// }

// onMounted(() => {
// const retrieve = async () => { 
//     const { data } = await supabase
//       .from("profiles")
//       .select("clicks")
//       .eq('id', user.id)
//       .single()
//     console.log({ data })
//   }
//   retrieve();
// })

</script>

<style scoped>
.title{
    text-decoration: underline;
}
img:active{
  scale: 120%;
}
</style>