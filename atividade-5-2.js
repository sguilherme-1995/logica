var user = require('readline-sync');

var continicial = user.question("Qual o numero inicial?\n  >");
var contfinal = user.question("Qual o numero final?\n  >");

while(continicial>contfinal){
    console.log("O numero inicial não pode ser maior que o numero final!\nDigite novamente os numeros! ");
    
    var continicial = user.question("Qual o numero inicial?\n  >");
    var contfinal = user.question("Qual o numero final?\n  >"); 
}
console.log("Contagem: ");
for(continicial; continicial <= contfinal; continicial++){
    console.log(">> "+continicial);
}
console.log("Contagem encerrada! ");
