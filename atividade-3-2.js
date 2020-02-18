var user = require('readline-sync');

var num1 = user.questionInt("Qual o primeiro numero? ");
var num2 = user.questionInt("Qual o segundo numero? ");
var num3 = 0;


while(num2 > 0){
   
   num3 = num3+num1;
   num2--;
   
}
console.log("O numero e " + num3);
