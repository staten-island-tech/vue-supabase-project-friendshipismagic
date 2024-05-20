<template>
  <div>
    <h1 class="title">Game Page</h1>
  </div>
  <img src="../assets/logo.png" @click="count++" />
  <p>Punches: {{ count }}</p>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
const count = ref(0)
</script>

<style scoped>
.title{
    text-decoration: underline;
}
</style>