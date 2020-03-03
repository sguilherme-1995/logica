var user = require('readline-sync');
var num1 = user.questionInt("Qual o primeiro numero?\n");
var num2 = user.questionInt("Qual o segundo numero?\n");

function menorNumero(num1, num2){
    if(num1<num2){
        return "O primeiro numero é menor!"
    }else if(num1>num2){
        return "O segundo numero é menor!"
    }else{
        return "Os numeros sao iguais!"
    }
}
console.log(menorNumero(num1, num2));
