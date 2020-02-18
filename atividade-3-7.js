var user = require('readline-sync');
var ent = user.question("Insira A ou B! ");
var num1;
var num2;

while(ent != "b" && ent != "B" && ent != "a" && ent != "A"){
   console.log("Letra invalida!");
   ent = user.question("Insira A ou B! ");   
}
    while(ent == "b" || ent == "B"){
       
        console.log("Realize a operação de soma!");
        num1 = user.questionInt("Qual o primeiro numero? ");
        num2 = user.questionInt("Qual o segundo numero? ");
        console.log("O resultado é: " + (num1+num2));
        ent = user.question("Se deseja fazer outra soma digite B ou A para encerrar! ");
        
    }
    console.log("Programa encerrado! ");


