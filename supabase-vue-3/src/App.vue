<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
<div>

  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/secret">Game</RouterLink>
    <RouterLink to="/login">Login</RouterLink>
  </nav>

  <div class="page">
    <Router-view />
  </div>
</div>

</template>



<style lang="scss" scoped>

</style>