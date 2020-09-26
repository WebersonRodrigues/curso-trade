<template>
    <div :class="(ativo) ? 'ativo' : 'inativo'" >
        <h1> Aqui vai entrar informações do usuario {{ nome }}</h1>
    </div>
</template>
<script>
export default {
    props:{
        nome: {type: String, required:true },
        ativo: {type: Boolean, default: true}
    },
    watch:{
        ativo(){
            this.mostrarAlertaCasoEstejaInativo();
        }
    },
    methods:{
        mostrarAlertaCasoEstejaInativo(){
            if(!this.ativo)
                alert('Ops, você foi inativado :(');
        }
    }

}
</script>
<style>
.ativo{
    color:blue;
}
.inativo{
    color: red;
}
</style>