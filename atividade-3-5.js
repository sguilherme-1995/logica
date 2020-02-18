var user = require('readline-sync');
var num = user.questionInt("Qual o numero? ");
var pote = user.questionInt("Qual a potencia? ");
var soma = 0;

while(pote > 0){
    soma = soma+num;
   
    pote--;
}
console.log(soma);

