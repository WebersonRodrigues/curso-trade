<template>
  <div class="about">
    <div v-if="usuario.nome">
      <h1>Olá eu sou o {{ usuario.nome }}</h1>
      <h2>
        A as minhas preferencias são:
        <span
          v-for="preferencia in usuario.preferencias"
          :key="preferencia"
        >|{{ preferencia }}|</span>
      </h2>
      <h1>Meu código é {{ codigo }}</h1>
      <div v-html="'<h1> teste'"></div>
      <br />
      <br />
    </div>

    <form>
      <div class="form-group">
        <label for="usr">Name:</label>
        <input type="text" class="form-control" id="usr" v-model="usuario.nome" />
      </div>
      <!-- <div class="form-group">
        <label for="pwd">Password:</label>
        <input type="password" class="form-control" id="pwd" />
      </div>-->
      Status: {{usuario.ativo}}
      <button 
      @click="usuario.ativo = !usuario.ativo"
      class="btn btn-primary"
      type="button"
      >Trocar Status</button>
    </form>
    <br>
    <br>
    <DadosUsuario 
      :nome="usuario.nome"
      :ativo="usuario.ativo"/>

  </div>
</template>
<script>

import DadosUsuario from '@/components/DadosUsuario'
export default {

  components:{
    DadosUsuario
  },
  // Essa é a função mais importante do vue.
  data() {
    return {
      usuario: {
        id: 1,
        nome: "Fulano",
        preferencias: ["Musica", "Filmes", "Games"],
        ativo: true
      },
      codigo: "16",
    };
  },
};
</script>
