<template>
 <h1 class="title">Game Page</h1>

<gameComp />
</template>

<script setup>
import { supabase } from '../clients/supabase';
import gameComp from '../components/gameComp.vue'
import { ref } from "vue";
let clickCount = ref(0)

// async function updateClicks(){
//   const user = await supabase.auth.getSession();
//   clickCount.value++
//   try {
//     const { data, error } = await supabase
//     .from('profiles')
//     .update({ clicks: clickCount.value })
//     .eq('id', user.data.session.user.id)
//     .select()
//       if(data){
//         console.log(data)
//       }
//   } catch (error) {
//     console.log(error)
//   }
// }

// async function updateClicks(){
//   const user = await supabase.auth.getSession();
//   clickCount.value++
//     const { data, error } = await supabase
//     .from('profiles')
//     .upsert({ clicks: clickCount.value })
//     .eq('id', user.data.session.user.id)
//     .select()
//       console.log(data);
// }

// function clicked(){
//   clickCount.value++
// }

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
.clicktoPunch{
    margin: 0%;
}
.clicktoPunch:active{
    
  animation: shake 0.1s linear 1;
}
/* img:hover{
    animation: shake 0.2s linear 1;
} */


@keyframes shake {
  0% {
    rotate: 0deg;
  }

  33% {
    rotate: 10deg;
    scale: 110%;
  }

  66% {
    rotate: -10deg;
    scale: 120%;
  }

  100% {
    rotate: 10deg;
    scale: 110%;
  }
}

</style>