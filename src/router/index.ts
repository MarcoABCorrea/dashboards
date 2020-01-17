import Vue from 'vue'
import Router from 'vue-router'
import NotFound from '@/views/NotFound.vue'

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/computers',
    name: 'computers',
    component: () => import('@/views/dashboards/Computers.vue')
  },
  {
    path: '/not-found',
    name: 'notFound',
    component: NotFound
  },
  {
    path: '*',
    redirect: '/not-found'
  }
]

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
