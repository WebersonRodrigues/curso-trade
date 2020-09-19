<template>
    <table class="table table-striped table-hover">
        <thead>
            <tr>
                <th v-for="coluna in colunas" :key="coluna.key" >
                    {{coluna.text}}
                </th>
            </tr>

        </thead>
        <tbody>
            <tr v-for="item in itens" :key="item.id" >
                <td> {{item.id}} </td>
               <td> {{item.nome}} </td> 
            </tr>
            

        </tbody>
    </table>
</template>

<script>
export default {
    data(){
        return {
            colunas: [
                {
                    key:'id',
                    text:'Id',
                    valor:'id',
                    classes:''
                },
                 {
                    key: 'nome',
                    text:'Nome',
                    valor:'nome',
                    classes:''
                }
            ],
            itens:[
                {id:1, nome:'Fulano'},
                {id:2, nome:'Ciclano'}
            ]
        }
    }
}
</script>
<style >
table.table{
    border: 1px solid #ddd;
    font-size: 14px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

table.table thead tr th {
    color: #767676; 
}
table.table thead tr th:hover {
    color: #343434; 
}
</style>
