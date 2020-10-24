const COLUNAS_TABELA_PRODUTOS = [
    { text: "Codigo", value: "codigo" },
    { text: "Nome", value: "nome" },
    { text: "Valor Unitário", value: "valorUnitario" },
    { text: "Quantidade", value: "quantidadeEstoque" },
    { text: "", value: "actions", sortable: false },
  ];

const OPCOES_PRODUTOS = [
    {
      id: 1,
      title: "Editar",
      icone: "mdi-pencil-outline",
      callback: () => {
        alert("Estou editando");
      },
    },
    {
      id: 2,
      title: "Deletar",
      icone: "mdi-delete-outline",
      callback: () => {
        alert("Estou deletando");
      },
    },
    {
      id: 3,
      title: "Movimentar",
      icone: "mdi-cached",
      callback: () => {
        alert("Estou movimentando");
      },
    },
    {
      id: 5,
      title: "Desativar",
      icone: "mdi-cancel",
      callback: () => {
        alert("Estou desabilitando");
      },
    },
  ];


export {
    COLUNAS_TABELA_PRODUTOS,
    OPCOES_PRODUTOS
}