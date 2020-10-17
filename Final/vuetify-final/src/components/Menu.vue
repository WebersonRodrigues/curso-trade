<template>
  <div>
    <v-navigation-drawer v-model="drawer" app clipped>
      <v-list dense>
        <v-list-item color="primary" v-for="rota in rotas" :key="rota.name" :to="rota.path" link>
          <v-list-item-action>
            <v-icon> {{ rota.icon }} </v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title> {{ rota.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
       
      </v-list>
    </v-navigation-drawer>

    <v-app-bar color="primary" app clipped-left>
      <v-app-bar-nav-icon dark @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="logo" >Trade Automação</v-toolbar-title>
    </v-app-bar>
  </div>
</template>

<script>

import routes from '../router/routes';

export default {
  name: "Menu",

  data(){
    return {
      drawer: null,
      rotas: []
    }
  },

  created(){
    this.rotas = routes;
  }


};
</script>

<style scoped>
 .logo {
   color: #fff;
   font-weight: 600;
 }
</style>
