var user = require('readline-sync');
var num = user.question("Qual o numero? ");
var tabuada = 10;

while(tabuada > 0){
    var conta = num*tabuada;
    console.log(num + " X "+tabuada+" = "+conta);
    tabuada--;
}

