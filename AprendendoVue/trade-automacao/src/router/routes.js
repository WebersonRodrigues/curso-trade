import Home from '../views/Home.vue'
import Sobre from '../views/Sobre.vue'
import Dashboard from '@/views/Dashboard'

const routes = [
    {
      path: '/',
      name: 'Home',
      component: Home,
      title:'Home'
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard,
      title:'Dashboard'
    },
    {
      path: '/sobre',
      name: 'Sobre',
      component: Sobre,
      title:'Sobre o sistema'
    },
    {
        path: '/teste',
        name: 'teste',
        component: Sobre,
        title:'teste'
      },
  ]

export default routes;