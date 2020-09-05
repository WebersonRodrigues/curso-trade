


// Podemos criar um modulo para resolver problemas de acessibilidade.
var moduloControleUsuario = (function(){
    // Aqui vou colocar todo meu código.
    // Aqui tudo é primvado.
    let btnAdicionar = document.getElementById('btn-adicionar-usuario');
    let tabelaUsuarios = document.querySelector('table.table tbody');


    btnAdicionar.addEventListener('click', () => {
        _abrirModal();
       
    });

    function obterUsuarios(){
      apiUsuario.obterTodos()
      .then(response => {
          console.log(response);
        //aqui qu eu vou popular a tabela
        _popularTabela(response.map(elemento => new Usuario(elemento)));
      })
      .catch(error => alert('Deu ruim...'))
    }

    function _popularTabela(listaUsuarios){
        listaUsuarios.map(u => {
            var tr = document.createElement('tr');

            var tdId = document.createElement('td');
            var tdNome = document.createElement('td');
            var tdSobreNome = document.createElement('td');
            var tdEmail = document.createElement('td');
            var tdFuncao = document.createElement('td');
            var tdAcoes = document.createElement('td');

            tdId.textContent = u.id;
            tdNome.textContent = u.nome;
            tdSobreNome.textContent = u.sobrenome;
            tdEmail.textContent = u.email;
            tdFuncao.textContent = u.funcao;

            tdAcoes.innerHTML = `
            <button class="btn btn-outline-primary">
            <i class="fas fa-pencil-alt"></i> Editar
          </button>
          <button class="btn btn-outline-primary">
            <i class="fas fa-trash-alt"></i> Excluir
          </button>
            `;

            tr.appendChild(tdId);
            tr.appendChild(tdNome);
            tr.appendChild(tdSobreNome);
            tr.appendChild(tdEmail);
            tr.appendChild(tdFuncao);
            tr.appendChild(tdAcoes);

            tabelaUsuarios.appendChild(tr);

        })
    }


    // O _ é uma convenção para programadores que não devemos colocar a função publica.
    function _abrirModal(){
      $('#modal-adicionar-usuario').modal({backdrop: "static"});  
    }

    function _fecharModal(){
        $('#modal-adicionar-usuario').modal('hide');  
    }

    // var nome = "Mateus"
    // function teste(){
    //     alert( 'teste')
    // }

    obterUsuarios();
    // Aqui eu deixo publico oque eu quero que seja chamado externamente.
    return {
        nome,
        // teste
     
    }


})()