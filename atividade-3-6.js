var user = require('readline-sync');

var num = user.question("Insira 0 para sair ou qualquer outra tecla para o continuar.  ");

while(num != 0){
    num = user.question("Insira 0 para sair ou qualquer outra tecla para o continuar.  ");
}
console.log("Programa encerrado! ");