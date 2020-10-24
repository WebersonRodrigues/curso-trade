import Produto  from '../models/Produto';

const listaProdutos = [
    new Produto({
      id: 1,
      codigo: "000001",
      nome: "Produto A",
      valorUnitario: "R$ 12,00",
      quantidadeEstoque: 14,
    }),
    new Produto({
      id: 2,
      codigo: "000002",
      nome: "Produto B",
      valorUnitario: "R$ 15,00",
      quantidadeEstoque: 35,
    }),
    new Produto({
      id: 3,
      codigo: "000003",
      nome: "Produto C",
      valorUnitario: "R$ 127,00",
      quantidadeEstoque: 2,
    }),
  ];

let proximoId = 4;

function obterTodos(){
    return new Promise((resolve) => {
        resolve(listaProdutos);
    });
}

function obterPorId(id){
    return new Promise((resolve) => {
        resolve(listaProdutos.filter(p => p.id == parseInt(id)));
    });
}

function obterPorNomeOuCodigo(nome, codigo){
    return new Promise((resolve) => {
        resolve(listaProdutos
            .filter(p => p.nome.toLowerCase() == nome.toLowerCase() ||
                        p.codigo == codigo
        ));
    });
}

function cadastrar(produto){

    produto.id = proximoId;
    proximoId ++;
    var novoProduto = new Produto(produto)
    listaProdutos.push(novoProduto);

    return new Promise((resolve) => {
        resolve(novoProduto);
    });
}

function atualizar(produto){
    console.log(produto)
}

function deletar(idProduto){
    console.log(idProduto);
}

export default {
    obterPorId,
    obterPorNomeOuCodigo,
    obterTodos,
    cadastrar,
    atualizar,
    deletar
}