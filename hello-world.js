console.log("Seja bem-vindo ao meu primeiro programa em javascript")
var readlineSync = require('readline-sync');
var numero1 = readlineSync.question("Insira o primeiro numero? ");
var numero2 = readlineSync.question("Insira o segundo numero? ");

if(numero1 > numero2){
    console.log("O numero " + numero1 + " é maior");
}else if(numero1 < numero2){
    console.log("O numero " + numero2 + " é maior");
}else{
    console.log("Os numeros são iguais!");
}