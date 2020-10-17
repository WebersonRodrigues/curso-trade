<template>
  <div class="text-center">
    <v-menu
      :close-on-content-click="clicado"
       offset-y
       bottom
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
        
          outlined
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
        >
          opções
          <v-icon
        right
        dark
      >
        mdi-cloud-upload
      </v-icon>
        </v-btn>
      </template>

      <v-list>
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
          class="item-menu"
          link
          @click="informarQueFuiClicado(item)"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script>
export default {

    props: {
        items: {type: Array, required: true},
    },
    data(){
        return {
            clicado: true,

        }
    },
    methods:{
        informarQueFuiClicado(item){
            this.$emit('onClick', item)
        }
    }
}
</script>

<style scoped>
.item-menu{
    cursor: pointer;
}
.v-btn:not(.v-btn--round).v-size--default {
    height: 30px;
    min-width: 64px;
    padding: 0 16px;
}
</style>