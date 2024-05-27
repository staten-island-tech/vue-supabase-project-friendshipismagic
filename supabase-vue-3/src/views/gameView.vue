<template>
<gameComp :clicksProp = 'clicks' />
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
import { supabase } from '../clients/supabase';
import gameComp from '../components/gameComp.vue'
export default {
  name: 'GameView',
  components: { gameComp },
    data(){
        return {
            loaded: false,
            clicks: [],
        };
    },
    mounted: function(){
        this.fetchData();
    },
    methods: {
        fetchData: async function(){
         this.loaded = false

            try{
                const results = await fetch(
                    'https://data.cityofnewyork.us/resource/jb7j-dtam.json'
                );
                const data = await results.json();
                let LeadingCause = data.results;

                this.malcount = data.filter(element => element.leading_cause.includes ('Malignant'))
                this.respritorycount = data.filter(element => element.leading_cause.includes ('Respiratory'))
                this.accexdrugcount = data.filter(element => element.leading_cause.includes ('Accidents'))
                this.suicidecount = data.filter(element => element.leading_cause.includes ('Self-Harm'))
                this.alzcount = data.filter(element => element.leading_cause.includes ('Alzheimer'))
                this.flucount = data.filter(element => element.leading_cause.includes ('Influenza'))
                this.livercount = data.filter(element => element.leading_cause.includes ('Liver'))
                this.septiccount = data.filter(element => element.leading_cause.includes ('Septicemia'))
          
                
                console.log(data);
                this.loaded=true
            } catch(error){
                console.log(error);
            }
        }
    }
}
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