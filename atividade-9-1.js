var user = require('readline-sync');
var num = user.questionFloat("Qual o valor do raio? \n");
var pi = 3.14159
function calculo(num){
    var volume = (4/3)*pi*(num*num*num);
    return volume;
}
console.log(calculo(num));
