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
        <v-btn @click="dialog = true" color="primary">Adicionar</v-btn>
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
          <v-data-table :headers="colunas" :items="produtos" :search="pesquisa">
            <template v-slot:item.actions="{ item }">
              <MenuOpcoes
                @onClick="deleteItem"
                :a="item"
                :items="opcoesProdutos"
              />
            </template>
          </v-data-table>
        </v-card>
      </v-col>
    </v-row>

    <v-row justify="center">
      <v-dialog v-model="dialog" persistent max-width="600px">
        <v-card>
          <v-card-title>
            <span class="titulo-pagina">Adicionar produto</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12" sm="3">
                  <v-text-field
                    label="Código"
                    v-model="produto.codigo"
                  ></v-text-field>
                </v-col>

                <v-col cols="12" sm="9">
                  <v-text-field
                    label="Nome"
                    v-model="produto.nome"
                  ></v-text-field>
                </v-col>

                <v-col cols="12" sm="4">
                  <v-text-field
                    label="Valor unitário"
                    v-model="produto.valorUnitario"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="4">
                  <v-text-field
                    label="Quantidade estoque"
                    v-model="produto.quantidadeEstoque"
                  ></v-text-field>
                </v-col>

                <v-col cols="12" sm="4">
                  <v-select
                    :items="['Ativo', 'Inativo']"
                    v-model="produto.status"
                    label="Status"
                  ></v-select>
                </v-col>

                <v-col cols="12" sm="12">
                  <v-textarea
                    label="Observação"
                    v-model="produto.observacao"
                    no-resize
                    rows="3"
                    auto-grow
                    outlined
                  ></v-textarea>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <div class="mb-6">
              <v-btn @click="salvar" color="primary">Salvar </v-btn>
              <v-btn
                class="mr-7 ml-2"
                @click="dialog = false"
                color="primary"
                outlined
                >Cancelar
              </v-btn>
            </div>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </v-container>
</template>

<script>
import MenuOpcoes from "../components/MenuOpcoes";
import apiProdutos from "../api/produto-api";
import {
  OPCOES_PRODUTOS,
  COLUNAS_TABELA_PRODUTOS,
} from "../constants/controle-produto-constants";
import Produto from "../models/Produto";

export default {
  name: "ControleDeProduto",

  components: {
    MenuOpcoes,
  },

  created() {
    apiProdutos
      .obterTodos()
      .then((response) => (this.produtos = response))
      .catch((erro) => console.log(erro));
  },

  data() {
    return {
      dialog: false,
      opcoesProdutos: OPCOES_PRODUTOS,
      pesquisa: undefined,
      produtos: [],
      colunas: COLUNAS_TABELA_PRODUTOS,
      produto: new Produto(),
    };
  },

  methods: {

    salvar(){

      if(!this.produto.modeloValido()){
        alert(`Favor informar os dados obrigatórios do produto.`)
        return;
      }

      apiProdutos.cadastrar(this.produto)
      .then(response => {
        alert(`Produto ${response.nome} cadastrado com sucesso!`);
        this.produtos.push(new Produto(response));
        this.dialog = false;
      })
      .catch(error => alert('Deu ruim ...' + error))
    }
  }
};
</script>

<style scoped>
.titulo-pagina {
  color: #767676;
}
</style>

