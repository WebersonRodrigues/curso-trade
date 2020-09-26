class Usuario {
    constructor(obj){
        obj = obj || {};
        this.id = obj.id;
        this.nome = obj.nome;
        this.email = obj.email;
    }

    validarModelo(){
        return !!(this.nome && this.email);
    }
}

export default Usuario;