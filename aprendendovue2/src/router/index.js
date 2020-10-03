import { createRouter, createWebHashHistory } from 'vue-router'
import routes from  './routes'

const router = createRouter({
  history: createWebHashHistory(),
  routes
})


  router.beforeEach((to, from, next) => {

    // Aqui vou verificar se a rota precisa de autenticação
    if(to.matched.some(record => record.meta.requiredAuth)) {

      // Aqui tenho que saber se o usuario esta autenticado.
      // Vou no localstorage saber se tem token      
        if (localStorage.getItem('token') == null) {
            next({
                path: '/login'
                // params: { nextUrl: to.fullPath }
            })
        } else {
          next();
        }
    }else {
      // Cai aqui quando a rota não esta autenticada.
      if (localStorage.getItem('token') == null) {
        next();
      }     
    }
})

export default router
