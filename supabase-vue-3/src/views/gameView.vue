<template>
<GameComp v-if="session" :session="session"/>
<div>
        <!-- <h1 class="title">Game Page</h1>
  <img src="../assets/logo.png" @click="clickCounter" />
  <p>Punches: {{ count }}</p> -->

        <img src="../assets/henriques.png" alt="punch">
        <img src="../assets/colangelo.png" alt="punch">
        <img src="../assets/logo.png" alt="punch">
        <img src="../assets/punch.png" alt="punch">
        

</div>

</template>

<script>
import GameComp from '../components/gameComp.vue'
import { onMounted, ref } from 'vue'
import { supabase } from "../clients/supabase";

const session = ref()
export default {
      components: {
      GameComp
      }
};

onMounted(() => {
  supabase.auth.getSession().then(({ data }) => {
    session.value = data.session
  })

  supabase.auth.onAuthStateChange((_, _session) => {
    session.value = _session
  })
})


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

</style>