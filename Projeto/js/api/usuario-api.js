var apiUsuario = (() =>{
const URL = "http://localhost:3000";


    function obterTodos(){

       return new Promise((resolve, reject) => {
          fetch(`${URL}/usuarios`)
          .then(response => response.json())
          .then(response => resolve(response))
          .catch(error => reject(error))
       })
    }

    return {
        obterTodos
    }
})()