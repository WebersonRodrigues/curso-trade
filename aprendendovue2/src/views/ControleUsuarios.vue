<template>
  <div>
    <h1>Usuarios</h1>
    <ul>
      <li v-for="usuario in listaUsuarios" :key="usuario.id"> 
        <h2>{{ usuario.email }}</h2>
        <h4>{{ usuario.id }} - {{ usuario.nome }}</h4>
      </li>
    </ul>
  </div>
</template>

<script>

import Usuario from '@/models/Usuario'
import apiUsuario from '@/services/usuario-api.js'

export default {
  data(){
    return{
      listaUsuarios: [],
      usuario: new Usuario()
    }
  },
  created(){
    apiUsuario.obter()
    .then(response => {
      this.listaUsuarios = response.data.map(u => new Usuario(u));
    })
    .catch(error => console.log(error))
  },

  // async create(){
  //   try {
  //     var resposta = await apiUsuario.obter();
  //     this.listaUsuarios = resposta.data.map(u => new Usuario(u));
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

}
</script>

<style scoped>
  h1 {
    color: red;
  }
</style>
