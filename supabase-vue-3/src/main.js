import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from './router'

createApp(App).use(router).use(createPinia()).mount('#app')

const pinia = createPinia()
const app = createApp(App)
pinia.use((context) => {
    const storeId = context.store.$id
    const serilizer = {
        serilize: JSON.stringify,
        deserilize: JSON.parse,
    }

    const fromStorage = serilizer.deserilize(window.localStorage.getItem(storeId))
    if (fromStorage) {
        context.store.$patch(fromStorage)
    }
    
    context.store.$subscribe((mutation, state) => {
        window.localStorage.setItem(storeId, serilizer.serilize(state))
    })
})
app.use(pinia)