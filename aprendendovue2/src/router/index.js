import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/controle-usuarios',
    name: 'ControleUsuarios',
    component: () => import(/* webpackChunkName: "ControleUsuarios" */ '../views/ControleUsuarios.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
