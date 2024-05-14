import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/Login.vue'
import UnauthorizedView from '../views/UnauthorizedView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
        path: '/secret',
        name: 'secret',
        component: () => import('../views/SecretView.vue')
    },
    {
        path: '/login',
        name: 'login',
        component: LoginView
    },
    {
        path: '/unauthorized',
        name: 'aunauthorized',
        component: UnauthorizedView
    },
  ]
})

export default router