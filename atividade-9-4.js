var user = require('readline-sync');
var num = user.question("Qual o numero?\n");
var tabuada = num;
function tabuadaFun(num){
while(tabuada > 0){
    var conta = num*tabuada;
    console.log(num + " X "+tabuada+" = "+conta);
    tabuada--;
}
return "Fim"
}
console.log(tabuadaFun(num))