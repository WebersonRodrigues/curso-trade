<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="12">
        <h1 class="titulo-pagina">Controle de produtos</h1>
        <v-divider></v-divider>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" sm="12">
        <v-btn>Adicionar</v-btn>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" sm="12">
        <v-card>
          <v-card-title>
            <v-spacer></v-spacer>
            <v-text-field
              v-model="pesquisa"
              append-icon="mdi-magnify"
              label="Pesquisa"
              single-line
              hide-details
            ></v-text-field>
          </v-card-title>
          <v-data-table :headers="colunas" :items="itens" :search="pesquisa">
            <template v-slot:item.actions="{ item }">
                <MenuOpcoes @onClick="deleteItem"  :a="item" :items="items"/>
            </template>
          </v-data-table>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

import MenuOpcoes from '../components/MenuOpcoes';
export default {
  name: "ControleDeProduto",

  components:{
    MenuOpcoes
  },

  data() {
    return {
       items: [
        { id: 1, title: 'Editar', callback: () => { alert( 'Estou editando')} },
        { id:2, title: 'Deletar', callback: () => { alert( 'Estou deletando')} },
        { id:3, title: 'Movimentar', callback: () => { alert( 'Estou movimentando')} },
        { id:5, title: 'Desativar', callback: () => { alert( 'Estou desabilitando')} },
      ],
      pesquisa: undefined,
      opcoesItens: ["Teste 1", "Teste 2"],
      itens: [
        {
          id: 1,
          codigo: "000001",
          descricao: "Produto A",
          valorUnitario: "R$ 12,00",
          quantidadeEstoque: 14,
        },
        {
          id: 2,
          codigo: "000002",
          descricao: "Produto B",
          valorUnitario: "R$ 15,00",
          quantidadeEstoque: 35,
        },
        {
          id: 3,
          codigo: "000003",
          descricao: "Produto C",
          valorUnitario: "R$ 127,00",
          quantidadeEstoque: 2,
        },
      ],
      colunas: [
        { text: "Codigo", value: "codigo" },
        { text: "Descrição", value: "descricao" },
        { text: "Valor Unitário", value: "valorUnitario" },
        { text: "Quantidade", value: "quantidadeEstoque" },
        { text: "", value: "actions", sortable: false },
      ],
    };
  },

  methods: {
    editItem(item) {
      console.log(item);
      alert("oi");
    },
    deleteItem(item) {
      console.log(item);
      // alert(item.title);
      item.callback();
    },
  },
};
</script>

<style scoped>
.titulo-pagina {
  color: #767676;
}
</style>

