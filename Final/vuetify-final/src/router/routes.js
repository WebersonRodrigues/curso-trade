
import Dashboard from '../views/Dashboard';
import ControleDeProdutos from '../views/ControleDeProdutos';
import Configuracoes from '../views/Configuracoes';

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    icon: 'mdi-view-dashboard',
    component: Dashboard,
    title:'Dashboard',
    meta:{
        requiresAuth: true,
        is_Admin: true
    }
  },
  {
    path: '/controle-de-produtos',
    name: 'ControleDeProdutos',
    icon: 'mdi-package-variant-closed',
    component: ControleDeProdutos,
    title:'Controle de produtos',
    meta:{
        requiresAuth: true,
        is_Admin: false
    }
  },
  {
    path: '/configuracoes',
    name: 'Configuracoes',
    icon: 'mdi-cog-outline',
    component: Configuracoes,
    title:'Configurações',
    meta:{
        requiresAuth: true,
        is_Admin: true
    }
  },
]


export default routes
