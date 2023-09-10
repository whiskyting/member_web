import { createRouter, createWebHistory } from 'vue-router'
import HelloWorld from '../components/HelloWorld.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HelloWorld
    },
    {
      path: '/settingPage',
      name: 'settingPage',
      component: () => import('../views/settingPage.vue')
    },
    {
      path: '/creditcard',
      name: 'creditcard',
      component: () => import('../views/creditcard.vue')
    },
    {
      path: '/password',
      name: 'password',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/password.vue')
    },
    {
      path: '/petinformation',
      name: 'petinformation',
      component: () => import('../views/petinformation.vue')
    },
    
    
  ]
})

export default router
