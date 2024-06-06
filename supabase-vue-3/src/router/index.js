import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/Login.vue'
import GameView from '../views/gameView.vue'
import LeaderBoard from '../views/leaderboardView.vue'
import Invalid from '../views/invalidView.vue'
import { supabase } from '../clients/supabase'
import { useAuthStore } from '../stores/authStore'

let localUser

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
        path: '/accountInfo',
        name: 'account',
        component: () => import('../views/accountInfo.vue'),
        meta: { requiresAuth: true }
    },
    {
        path: '/login',
        name: 'login',
        component: LoginView
    },
    {
        path: '/game',
        name: 'game',
        component: GameView,
        meta: { requiresAuth: true }
    },
    {
        path: '/leaderboard',
        name: 'laderboard',
        component: LeaderBoard,
    },
    {
        path: '/invalid',
        name: 'invalid',
        component: Invalid,
    },
  ]
})

// async function getUser(next){
//     localUser = await supabase.auth.getSession();
//     if(localUser.data.session === null){
//         alert("Please log in first.")
//     } else{
//         next();
//     }
// }

// router.beforeEach((to, from, next) => {
//     if (to.meta.requiresAuth){
//         getUser(next);
//     } else {
//         next();
//     }
// })

router.beforeEach((to, from, next) => {
    if (!useAuthStore()?.loggedIn && to.meta.requiresAuth) {
        router.replace('/invalid')
    } else {
        next();
    }
})

export default router