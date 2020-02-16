var user = require('readline-sync');

var numero = user.question("Digite um numero ");

if(numero >= 100 && numero <= 200){
    console.log("Voce digitou um numero entre 100 e 200");
}else if(numero < 100 || numero > 200){
    console.log("Voce digitou um numero fora da faixa entre 100 e 200");
}
