<template>
  <div>
    <h1 class="title">Game Page</h1>
  </div>
  <!-- <img src="../assets/logo.png" @click="clickCounter" />
  <p>Punches: {{ count }}</p> -->
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { supabase } from "../clients/supabase";
import { defineStore } from 'pinia'


export const useCounterStore = defineStore('counter', {
  state: () => ({
    count: 0,
  }),
  actions: {
    increment() {
      this.count++
    },
  },
})




</script>

<style scoped>
.title{
    text-decoration: underline;
}
</style>