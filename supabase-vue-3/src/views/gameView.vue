<template>
<div>
        <h1 class="title">Game Page</h1>
  <img src="../assets/logo.png" @click="clickCounter" />
  <p>Punches: {{ count }}</p>

        <img src="../assets/henriques.png" alt="punch">
        <img src="../assets/colangelo.png" alt="punch">
        <img src="../assets/logo.png" alt="punch">
        <img src="../assets/punch.png" alt="punch">
        

</div>
<GameComp />
</template>

<script setup lang="ts">
const items = [
{name: 'bob',
price: 500,
img: "../assets/student1.png"
},

{name: 'bob',
price: 500,
img: "../assets/student1.png"
},

{name: 'bob',
price: 500,
img: "../assets/student1.png"
},

{name: 'bob',
price: 500,
img: "../assets/student1.png"
},

{name: 'bob',
price: 600,
img: "../assets/student1.png"
},

{name: 'bob',
price: 1000,
img: "../assets/student1.png"
}
]

</script>

<style scoped>
.container{
        cursor: url(""), auto;
}
</style>