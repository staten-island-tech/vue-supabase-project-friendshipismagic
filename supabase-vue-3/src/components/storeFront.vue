<template>
    <div class="cards-container">
    <div class="card">
        <h2> {{ Item.name }}</h2>
        <h3> ${{ Item.price }}.00</h3>
        <img :src="Item.img" alt="" /> 
        <button @click="toggleButton(); purchasedCard()" :class="{ 'placed': buttonText === 'Purchased' }"> {{ buttonText }} </button>
    </div>
    </div>
</template>

<script setup> 

</script>