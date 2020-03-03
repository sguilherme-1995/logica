var user = require('readline-sync');

var base = user.question("Qual o valor base? \n");
var potencia = user.question("Qual o valor da potencia? \n");
function calculoPotencia(base, potencia){
    return base ** potencia;
}
console.log(calculoPotencia(base,potencia));