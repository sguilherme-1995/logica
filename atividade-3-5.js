var user = require('readline-sync');
var num = user.questionInt("Qual o numero? ");
var pote = user.questionInt("Qual a potencia? ");
var soma = 1;

while(pote >= 1){
    soma = soma*num;
   
    pote--;
}
console.log(soma);

