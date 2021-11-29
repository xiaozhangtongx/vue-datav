import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: () => import('../views/index.vue'),
    redirect: '/home',
    children: [
      {
        path: '/home',
        component: () => import('../views/Home.vue'),
      },
    ],
  },
]
const router = new VueRouter({
  routes,
})

export default router
