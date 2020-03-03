var user = require('readline-sync');
var num = user.questionInt("Qual o numero? \n");

function calcAbsoluto(num){
    return Math.abs(num)
}
console.log(calcAbsoluto(num));