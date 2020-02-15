var user = require('readline-sync');
var numero = user.question("Insira o numero que voce quer saber se e impar ou par? ");

if(numero % 2 == 0){
    console.log("Seu número é par!");
}else{
    console.log("Seu número é impar!");
}