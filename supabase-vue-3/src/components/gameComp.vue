<template>
  <div>
    <h1 class="title">Game Page</h1>
  </div>
  <img src="../assets/logo.png" @click="updateClicks" />
  <p>Punches:</p>
</template>

<script lang="ts">
import { onMounted, ref, toRefs } from 'vue'
import { supabase } from "../supabase"
const count = ref(0)

// const props = defineProps(['session']);
// const { session } = toRefs(props);
const session = ref();
getSession();

async function getSession(){
    session.value = await supabase.auth.getSession();
}


const loading = ref(true);
const username = ref('');
const email = ref('');
const clicker_count = ref(0);

onMounted(() => {
  getProfile()
})

async function getProfile() {
  try {
    loading.value = true
    const { user } = session.value
  
    const { data, error, status } = await supabase
      .from('users')
      .select(`username, email, clicker_count`)
      .eq('id', user.id)
      .single()

    if (error && status !== 406) throw error

    if (data) {
      username.value = data.username
      email.value = data.email
      clicker_count.value = data.clicker_count
    }
  } catch (error) {
    alert(error.message)
  } finally {
    loading.value = false
  }
}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
async function updateClicks() {
  count.value++
  try {
    loading.value = true
    const { user } = session.value

    const updates = {
      clicker_count: 'count.value',
    }

    const { error } = await supabase.from('users').upsert(updates)

    if (error) throw error
  } catch (error) {
    alert(error.message)
  } finally {
    loading.value = false
  }
}


</script>

<style scoped>
.title{
    text-decoration: underline;
}
img:active{
  scale: 120%;
}
</style>