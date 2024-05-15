<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Silkscreen:wght@400;700&family=VT323&display=swap" rel="stylesheet">
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
h1{
     font-family: "VT323", monospace;
  font-weight: 800;
  font-style: normal;
}

nav{
  display: flex;
  font-family: "VT323", monospace;
  font-weight: 800;
  font-style: normal;
  justify-content: space-around;
  background-color: #a262133e;
  border-radius: 1rem;
  width: 100%;
}

img{
  width: 150px;
}
</style>