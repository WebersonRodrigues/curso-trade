<template>
  <v-app id="inspire">
    <Menu />
    <v-main>
      <v-container>
        <router-view />
      </v-container>
    </v-main>
    <Rodape />
  </v-app>
</template>

<script>
import Menu from "@/components/Menu";
import Rodape from "@/components/Rodape";

export default {
  name: "App",
  components: {
    Menu,
    Rodape,
  },

  data: () => ({}),

  created() {
    // this.$vuetify.theme.dark = true;
  },
};
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,400;0,500;0,700;0,900;1,400;1,500;1,700;1,900&display=swap');
  
  * {
    font-family: 'Roboto', sans-serif;
  }

  .v-btn {
    text-transform: none;
  }
</style>
