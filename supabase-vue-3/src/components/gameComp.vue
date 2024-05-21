<template>
  <div>
    <h1 class="title">Game Page</h1>
  </div>
  <img src="../assets/logo.png" @click="clickCounter" />
  <p>Punches: {{ count }}</p>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { supabase } from "../clients/supabase"
const count = ref(0)

async function clickCounter(){
  count.value++
    const { data, error } = await supabase.auth.updateUser(
      options: {
        data: {
          click_count: count.value
        }
      }
    )
}

</script>

<style scoped>
.title{
    text-decoration: underline;
}
img:active{
  scale: 120%;
}
</style>