export default class Produto {
    constructor(obj){
        obj = obj || {};

        this.id = obj.id;
        this.codigo = obj.codigo;
        this.nome = obj.nome;
        this.valorUnitario = obj.valorUnitario;
        this.quantidadeEstoque = obj.quantidadeEstoque;
        this.observacao = obj.observacao;
        this.status = obj.status;
    }

    modeloValido(){
        return !!(this.codigo && 
                  this.nome && 
                  this.valorUnitario && 
                  this.quantidadeEstoque);
    }
}


