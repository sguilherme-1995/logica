var user = require('readline-sync');

var numcerto = 22;

var numentrada = user.question("Qual o numero? ");

while (numcerto != numentrada){
    console.log("Tente novamente!");
    var numentrada = user.question("Qual o numero? ");
} {
    console.log("Acertou mizeravi!");   
}
