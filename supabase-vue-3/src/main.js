import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from './router'

createApp(App).use(router).mount('#app')

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)