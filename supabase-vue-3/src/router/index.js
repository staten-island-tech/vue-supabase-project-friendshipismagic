import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/Login.vue'
import GameView from '../views/gameView.vue'
import LeaderBoard from '../views/leaderboardView.vue'
import { supabase } from '../clients/supabase'
import { useLoginStore } from '../stores/authStore'

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
    if (useLoginStore.login === 0 && to.meta.requiresAuth) {
        alert('Please log in')
    } else {
        next();
    }
})

export default router