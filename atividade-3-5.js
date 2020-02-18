var user = require('readline-sync');
var num = user.question("Qual o numero? ");
var pote = user.question("Qual a potencia? ");
var soma = 0;

while(pote > 0){
    soma = num*pote;
    console.log(soma);
}

