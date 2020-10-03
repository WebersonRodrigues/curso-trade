<template>
  <div class="home">
    <form >
      <label for="fname">Nome</label>
      <input type="text" id="fname" name="firstname" v-model="usuario" >

      <label for="lname">Senha</label>
      <input type="password" id="lname" name="lastname" v-model="senha">
    
      <button @click="login" type="button">Entrar</button>
    </form>
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'Login',
  components: {
 
  },
  data(){
    return {
      usuario: undefined,
      senha: undefined
    }
  },
  methods:{
    login(){
      // logica barata rsrsrss
      if(this.usuario.toString().toLowerCase() == 'admin' && 
        this.senha.toString() == '123'){
          localStorage.setItem('token', btoa(this.senha));

          // Aqui tenho que enviar o usuario para tela de home.
          this.$router.push({ path: '/' });
        }
    }
  }
}
</script>

<style scoped>
input, select {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

input[type=submit] {
  width: 100%;
  background-color: #4CAF50;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type=submit]:hover {
  background-color: #45a049;
}

div {
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
}

button {
  width: 100px;
  padding: 5px;
  background-color: #45a049;

}
</style>
