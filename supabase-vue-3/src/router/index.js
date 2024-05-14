import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
      {
        path: '/pie',
        name: 'bar',
        component: BarView
      },
      {
        path: '/bar',
        name: 'pie',
        component: PieView
      },
      {
        path: '/',
        name: 'options',
        // route level code-splitting
        // this generates a separate chunk (About.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: OptionsView
      }
    ]
  })
  
  export default router