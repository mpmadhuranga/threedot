import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'home',
    component: () => import('../views/taskOne.vue')
  },
  {
    path: '/taskTwo',
    name: 'taskTwo',
    component: () => import('../views/taskTwo.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router