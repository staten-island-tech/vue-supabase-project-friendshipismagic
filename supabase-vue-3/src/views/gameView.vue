<template>
<div>
        <img src="../assets/henriques.png" alt="punch">
        <img src="../assets/colangelo.png" alt="punch">
        <img src="../assets/logo.png" alt="punch">
</div>
<GameComp />
</template>

<script setup lang="ts">
import GameComp from '../components/gameComp.vue';

const items = [
{name: 'bob',
price: 9.99,
}
]
</script>

<style scoped>

</style>