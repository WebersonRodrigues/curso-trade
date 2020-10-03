<template>
    <div id="menu">
        <ul>
            <li  v-for="rota in listaRotas" :key="rota.name" v-show="rota.name != 'Login'"  >
                <router-link :to="rota.path" > {{ rota.title }} </router-link>
            </li>
         
        </ul>

        <div class="logout">
            <button @click="logout">Logout</button>
        </div>
    </div>
</template>

<script>

import routes from '../router/routes'
export default {
    data(){
        return {
            listaRotas: []
        }
    },

    created(){
      this.listaRotas = routes;
    },
    methods:{
        logout(){
            localStorage.removeItem('token');
            this.$router.push({ path: '/login' });
        }
    }

}
</script>

<style scoped>
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
}

li {
  float: left;
}

li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

/* Change the link color to #111 (black) on hover */
li a:hover {
  background-color: #111;
}
</style>