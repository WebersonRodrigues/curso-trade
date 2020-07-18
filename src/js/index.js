var valor = prompt('digite um numero');
var numero  = parseInt(numero);

if(isNaN(numero)){
    alert('Você não digitou um numero - ' + valor);
} else if(numero%2 != 0){
    alert('Impar');
}else{
    alert('Par');
}

// Resolver esse problema e explicar 
// aonde esta o bug e porque estava ocorrendo. ;)