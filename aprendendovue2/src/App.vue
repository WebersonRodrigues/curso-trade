<template>
  <div>
    <Menu v-if="this.$route.name != 'Login'"/>
    <router-view/>
  </div>

</template>

<script>

import Menu from '@/components/Menu';

export default {
  components:{
    Menu
  },

  created(){
  
    console.log(this);
  }

}
</script>

<style>

</style>
