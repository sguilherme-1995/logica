var user = require('readline-sync');
var num = user.question("Qual o numero? ");
var tabuada = 10;
conta = num*tabuada;
while(tabuada > 0){
    console.log(num + " X "+tabuada+" = "+conta);
    tabuada--;
}

