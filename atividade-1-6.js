var user = require('readline-sync');

var sexo = user.question("Qual o seu sexo?  1-Masculino | 2-Feminino ");
var altura = user.question("Qual a sua altura em metros?");

if(sexo == 1){
    sexo = 1
    console.log("Seu peso ideal é: " + ((72.7*altura)-58));
}else if(sexo == 2){
    sexo = 2
    console.log("Seu peso ideal é: " + ((62.1*altura)-44.7));
}else{
    console.log("Resposta incompativel!");
}

