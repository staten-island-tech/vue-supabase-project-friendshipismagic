<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
<div>

  <nav>
    <img src="./assets/logo.png" alt="whalen"><h1>ClickBaited</h1>
    <RouterLink to="/">About Page</RouterLink>
    <RouterLink to="/game">Play</RouterLink>
    <RouterLink to="/leaderboard">LeaderBoard</RouterLink>
    <RouterLink to="/accountInfo">Account Information</RouterLink>
    <RouterLink to="/login">Login/Logout</RouterLink>
  </nav>

  <div class="page">
    <Router-view />
  </div>
</div>

</template>



<style scoped>
nav{
  display: flex;
  justify-content: space-around;
  background-color: #a262133e;
  border-radius: 1rem;
  width: 100%;
}
img{
  width: 150px;
}
</style>