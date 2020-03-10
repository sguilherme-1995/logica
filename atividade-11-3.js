var user = require('readline-sync');
var calc = require('canivetesuiconode');
var num = user.questionInt("Qual o numero?\n");
if(calc.NumeroPar(num) == true){
    console.log("Seu numero e par!");
}else{
    console.log("Seu numero e impar!");
}