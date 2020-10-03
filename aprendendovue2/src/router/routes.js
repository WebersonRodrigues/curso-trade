import Home from '../views/Home.vue'
import ControleUsuarios from '../views/ControleUsuarios.vue';
import Login from '../views/Login.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    title:'Home',
    component: Home,
    icon: 'aqui vai entrar um icone',
    meta: {
        requiredAuth: true
    }
  },

  {
    path: '/controle-usuarios',
    name: 'ControleUsuario',
    title:'Controle de Usuários',
    component: ControleUsuarios,
    icon: 'aqui vai entrar um icone',
    meta: {
        requiredAuth: true
    }
  },
  {
    path: '/login',
    name: 'Login',
    title:'Login',
    component: Login,
    icon: 'aqui vai entrar um icone',
    meta: {
        requiredAuth: false
    }
  },

]


export default routes