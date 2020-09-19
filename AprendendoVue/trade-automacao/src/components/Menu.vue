<template>
    <div id="nav">
        <ul>
            <li v-for="rota in minhasRotas" :key="rota.name">
              <router-link :to="rota.path"> {{ rota.title }} </router-link>  
            </li>
        </ul>
    </div>
</template>

<script>

import routes from '@/router/routes';

export default {
    
    data(){
        return{
            minhasRotas: []
        }
    },

    created(){
        this.minhasRotas = routes;
    }
}
</script>

<style>
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
  padding: 18px 20px;
  text-decoration: none;
}

/* Change the link color to #111 (black) on hover */
li a:hover {
  background-color: #111;
}
</style>