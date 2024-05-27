<template>
  <div>
    <h1 class="title">Game Page</h1>
  </div>
  <img src="../assets/logo.png" @click="clickCounter" />
  <p>Punches: {{ clicksProp }}</p>
</template>

<script>
import { ref, computed } from 'vue'
import { supabase } from "../clients/supabase";

 export default {
        props: {
          clicksProp: Number
        }
      
  }
</script>

<style scoped>
.title{
    text-decoration: underline;
}
</style>