/**
 * 
 * Pilares da logica de programação.
 * 1º Variaveis e constants OK
 * 2º comandos de decisao (if,  else, switch case ) OK
 * 3º Looping (for, while, do while, for in e for of) OK
 * 4º Array/Vetores (Array é uma lista que pode conter qualquer coisa). OK
 * 5º Objetos (Podem ser Compostos ou simples "Flat"). OK
 * 6º Inputs e outputs (São entradas e saidas de dados). OK
 * 7º Funções OK. 
 * 8º Escopos? (Local / Global).OK
 * 9º Referências de objetos. 
 */

//  var  numero = parseInt(prompt('digite um numero'));

//  if(numero > 10){
//      document.write('Você digitou um numero maior que 10');
//  } else if (numero > 5 && numero < 10){
//      document.write('Você digitou um numero entre 5 e 10');
//  } else{
//      document.write('Você digitou um numero menor que 5');
//  }


//  switch (numero) {
 
//     case 10:
//     case 9:
//     case 8: document.write('Você digitou o numero 10');
//         break;
//     case 5: document.write('Você digitou o numero  5');
//         break;
//     case 7: document.write('Você digitou o numero  7');
//         break; 
//     default: document.write('Você digitou qualquer outro numero');
//         break;
//  }

// for(var i = 0; i < 10; i++){
//     document.write('sou a posição - ' + i + '<br>');
// }

// var cont = 0;

// while(cont < 10){
//     document.write('sou a posição - ' + cont + '<br>');
//     cont++;
// }


// var cont = 0;

// do {
//     document.write('sou a posição - ' + cont + '<br>');
//     cont++;
// }while(cont < 10)

// var nomes = ['Fulano', 'Ciclano', 'Beltrano'];

// for(var i = 0; i < nomes.length; i++){
//     document.write(nomes[i] + '<br>');
// }

// for (nome of nomes) {
//     document.write(nome + '<br>');
// }

// for (nome in nomes) {
//     document.write(nome + '<br>');
// }



/**
 * Exercicio 1
 * Eu como usuario preciso de uma sistema de tabuada dinamica.
 * Quero poder passar 2 numeros, o primeiro é o numero que 
 * será multiplicado, o segundo é até quanto eu quero multiplicar.
 * 
 * Todo resultado deve iniciar em Zero e ir até o numero que 
 * eu passar.
 * Resultado semelhante a esse na tela:
 * 13 x 0 = 0
 * 13 x 1 = 13
 * 13 x 2 = 26
 * 
 * Exercicio de casa!
 * 
 * Criar um objeto da trade.
 * Esse objeto deve conter:
 * 1º Uma lista dos sistemas que a trade tem no mercado.
 * 2º Uma lista dos funcionarios que trabalham na empresa.
 * 3º Cada funcionario, deve ter nome, idade, tempo de empresa.
 * 4º quantidade de equipamentos na empresa.(PC somente)
 * 5º Colocar mais 3 propriedades a seu critério.
 * 6º Aprensentar essas informação na tela para o usuario.
 * 7º Subir tudo no github.
 * 
 * Hahaha pegadinha do malandro
 * fazer um case onde eu passe um numero e ele me retorne conforme os cases abaixo:
 * 
 * Exemplo:
 * numero < 5 && numero > 0 -> você digitou um numero entre 0 e 5.
 * 
 */

//  var nome  = prompt('Digite seu nome por gentileza.');

//  alert('Bem vindo a tabuada dinamica Sr(a)' + nome);

//  var numero = parseInt(prompt( 'Digite o numero que deseja multiplicar'));
//  var multiplicador = parseInt(prompt( 'Digite até quanto deseja multiplicar'));

//  for(var i = 0; i <= multiplicador; i++){
//     //  document
//     //  .write(numero + ' x ' + i + ' = ' + (numero * i) + '<br>');

//     // string format
//      document
//      .write(`${numero} x ${i} = ${numero * i} <br>`);
//  }

// Função void sem parametro
// function mostrarAlert(){
//     alert('oi');
// }

// mostrarAlert();

// Void e recebe parametro
// function mostrarAlert(mensagem){
//     alert(mensagem);
// }

// mostrarAlert('ola!!!!');


// // Função com parametro e retorno.
// function retornarSeParOuImpar(numero){
//     // if(numero%2 != 0){
//     //     return 'Impar'
//     // }
//     // return 'Par'

//     return (numero%2 != 0) ? 'Impar' : 'Par';
// }

// alert(retornarSeParOuImpar(11));
// // function gerarTabuadaDinamica(){

// // }

// function gerarTabuadaDinamica(numero, multiplicador){
//     var resultato = [];
//     for(var i = 0; i <= multiplicador; i++){
//         resultato.push(`${numero} x ${i} = ${numero * i}`);
//     }
//     return resultato;
// }


// var teste = gerarTabuadaDinamica(13, 10);

// Escopos

// Global, qualquer coisa dentro do arquivo consegue acessar.
// var nome = 'Fulano';


// // function blocket
// function teste(){
//     // Escopo local
//     nome = "Ciclano"
//     document.write(nome);
// }

// teste();

// // document.write(nome);
// var nome = 'Fulano';

// // Aqui não é escopo local
// if(true) {
//     let nome = 'Ciclano';
//     document.write(nome);
// }

// document.write(nome);

// var n = 10;
// const m = 10;
// let p = 10



// let numero = 10;
// let produtoA = {descricao:'Produto A', quantidade: 10};

// document.write(numero);
// document.write(JSON.stringify(produtoA));
// document.write('<br>');

// let numero1 = numero;
// // let produtoB = produtoA;
// // Faz merge dos objetos.
// let produtoB = Object.assign({}, produtoA);

// numero1 = 15;
// produtoB.quantidade = 11;

// document.write(numero1);
// document.write(JSON.stringify(produtoB));

// document.write('<br>');
// document.write('<br>');

// document.write(numero);
// document.write(JSON.stringify(produtoA));
// document.write('<br>');


v

