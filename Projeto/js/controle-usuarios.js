// Podemos criar um modulo para resolver problemas de acessibilidade.
var moduloControleUsuario = (function(){
    // Aqui vou colocar todo meu código.
    // Aqui tudo é primvado.
    let btnAdicionar = document.getElementById('btn-adicionar-usuario');
    let tabelaUsuarios = document.querySelector('table.table tbody');
    let listaUsuariosBKP = [];

    let idUsuarioAtual = undefined;

    let modal = {
      nome: document.querySelector('#nome'),
      sobrenome: document.querySelector('#sobrenome'),
      email: document.querySelector('#email'),
      funcao: document.querySelector('#funcao'),
      observacao: document.querySelector('#observacao'),
      btnSalvar: document.querySelector('#btn-salvar'),
      btnCancelar: document.querySelector('#btn-cancelar'),
    };

    btnAdicionar.addEventListener('click', () => {
        _abrirModal();
    });

    modal.btnCancelar.addEventListener('click', () => {
      _fecharModal();
    })

    modal.btnSalvar.addEventListener('click', () => {
      
      var usuario = _obterUsuarioModal();
   
      // Aqui verifico se o modelo é valido
      if(!usuario.modeloValido()){
        swal("Atenção!", "Favor informar os campos obrigatórios", "error");
        return;
      }
      // Aqui crio no backend.\

      
      if(idUsuarioAtual){
        usuario.id =  idUsuarioAtual;
       atualizar(usuario);
      }else{
        cadastrar(usuario);
      }

    })

    function cadastrar(usuario){
      apiUsuario.cadastrar(usuario)
      .then((response) => {
        // Uma forma de fazer.... 99% das vezes vai usar desta forma.
        listaUsuariosBKP.push(new Usuario(response));
        _popularTabela(listaUsuariosBKP)

        // obterUsuarios();
        swal("Usuário", "Cadastrado com sucesso!", "success");
        _fecharModal();
        _limparModal();
      })
    }

    function atualizar(usuario){
      apiUsuario.editar(usuario)
      .then(() => {
        obterUsuarios();

        swal("Usuário", `${usuario.nome}  atualizado com sucesso!`, "success");
        _fecharModal();
        _limparModal();
      })
    }

    function _limparModal(){
      modal.nome.value = "";
      modal.sobrenome.value = "";
      modal.email.value = "";
      modal.funcao.value = "";
      modal.observacao.value = "";
      idUsuarioAtual = undefined;
    }

    function _obterUsuarioModal(){
      return new Usuario({
        nome: modal.nome.value,
        sobrenome : modal.sobrenome.value,
        email: modal.email.value,
        funcao: modal.funcao.value,
        observacao: modal.observacao.value   
      });
    }

    function obterUsuarios(){
      apiUsuario.obterTodos()
      .then(response => {
        listaUsuariosBKP = response.map(elemento => new Usuario(elemento));
        _popularTabela(listaUsuariosBKP);
      })
      .catch(error => swal("Ops", `Não foi possível obter todos os usuários :(`, "error"));
    }

    function _popularTabela(listaUsuarios){

        tabelaUsuarios.textContent = "";

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
            <button class="btn btn-outline-primary" onClick="moduloControleUsuario.editar(${u.id})">
            <i class="fas fa-pencil-alt"></i> Editar
          </button>
          <button class="btn btn-outline-primary" onClick="moduloControleUsuario.excluir(${u.id})">
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

    function excluir(idUsuario){

      swal({
        title: "Deseja excluir o usuário?",
        icon: "warning",
        buttons: true,
        dangerMode: true,
        buttons: {
          confirm: {
            text: "Confirmar",
            value: true,
            className: "btn btn-primary"
          },
        },

      })
      .then((willDelete) => {
        if (willDelete) {
          apiUsuario.deletar(idUsuario)
          .then((response) => {
            swal("Usuário", `Excluido com sucesso!`, "success");
            obterUsuarios();
          })
          .catch(error => swal("Ops", `Houve um problema ao excluir o usuário :(`, "success"))
      
        }
      });

    }

    function _preencherModal(usuario){
      modal.nome.value = usuario.nome || "";
      modal.sobrenome.value = usuario.sobrenome || "";
      modal.email.value = usuario.email || "";
      modal.funcao.value = usuario.funcao || "Administrador";
      modal.observacao.value = usuario.observacao || "";
    }
    
    function editar(idUsuario){
      var usuario = listaUsuariosBKP.filter(u => u.id == idUsuario)[0];
     
      idUsuarioAtual = idUsuario;
      _preencherModal(usuario);
      _abrirModal();
    }

    obterUsuarios();
    // Aqui eu deixo publico oque eu quero que seja chamado externamente.
    return {
        editar,
        excluir    
    }
})()