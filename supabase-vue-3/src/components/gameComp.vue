<template>
  <div>
    <h1 class="title">Game Page</h1>
  </div>
  <img src="../assets/logo.png" @click="clickCounter" />
  <p>Punches: {{ count }}</p>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { supabase } from "../clients/supabase";


async function clickCounter(){
  const count = ref(0)
  const localUser = await supabase.auth.getSession({
options: {
  data: {
    clickCount:
  }
}
  });

}

</script>

<style scoped>
.title{
    text-decoration: underline;
}
</style>