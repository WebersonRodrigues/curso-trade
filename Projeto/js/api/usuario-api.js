var apiUsuario = (() =>{
const URL = "http://localhost:3000";


    function obterTodos(){
       return new Promise((resolve, reject) => {

          fetch(`${URL}/usuarios`,{
              method: "GET"
          })
          .then(response => response.json())
          .then(response => resolve(response))
          .catch(error => reject(error))
       })
    }

    function cadastrar(usuario){
        return new Promise((resolve, reject) => {
 
           fetch(`${URL}/usuarios`,{
               method: "POST",
               body: JSON.stringify(usuario),
               headers:{
                   'Content-Type': 'application/json'
               }
           })
           .then(response => response.json())
           .then(response => resolve(response))
           .catch(error => reject(error))
        })
     }

     function deletar(idUsuario){
        return new Promise((resolve, reject) => {
           fetch(`${URL}/usuarios/${idUsuario}`,{
               method: "DELETE"
           })
           .then(response => response.json())
           .then(response => resolve(response))
           .catch(error => reject(error))
        })
    }

    function editar(usuario){
        return new Promise((resolve, reject) => {
 
           fetch(`${URL}/usuarios/${usuario.id}`,{
               method: "PUT",
               body: JSON.stringify(usuario),
               headers:{
                   'Content-Type': 'application/json'
               }
           })
           .then(response => response.json())
           .then(response => resolve(response))
           .catch(error => reject(error))
        })
     }

    return {
        obterTodos,
        cadastrar,
        deletar,
        editar
    }
})()