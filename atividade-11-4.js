var user = require('readline-sync');
var isOdd = require('is-odd');

var num = user.questionInt("Qual o numero?\n")
if(isOdd(num) == true){
    console.log("Seu numero e primo!");
}else{
    console.log("Seu numero nao e primo!");
}