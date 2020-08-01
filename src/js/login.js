var inputEmail = document.getElementById('email');
var inputSenha = document.getElementById('senha');
var btnEntrar = document.getElementById('btn-entrar');

btnEntrar.addEventListener('click', function(){
    
    let email  = inputEmail.value;
    let senha = inputSenha.value;

    if(!email || !senha){
        alert('Jovem, favor preencher e-mail e senha ;)');
        return;
    }

    if(email.toLowerCase() != "admin@admin" || senha != "123"){
        alert('Login ou senha inválidos');
        return;
    }
    
    location.href = 'index.html'
})
