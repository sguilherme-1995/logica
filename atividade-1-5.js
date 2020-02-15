function sortfunction(a,b){
    return (a-b);
}

var user = require('readline-sync');

var num1 = user.question("Qual o primeiro numero? ");
var num2 = user.question("Qual o segundo numero? ");
var num3 = user.question("Qual o terceiro numero? ");

if(num1 ==num2 || num2 == num3 || num1 == num3){
    console.log("Não pode ter dois numeros iguais!");
}else {
    var numeros = [num1, num2, num3]
    console.log(numeros.sort(sortfunction));
}