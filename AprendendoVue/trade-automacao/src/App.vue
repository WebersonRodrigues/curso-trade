<template>
  <div id="app">
    <Menu />
    <router-view/>
  </div>
</template>

<script>
import Menu from '@/components/Menu';
  export default {
  // Aqui dentro eu escrevo vue.... frsrsrsrs
    components:{
      Menu
    }
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
*{
  margin:0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}
</style>
