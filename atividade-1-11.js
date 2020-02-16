var user = require('readline-sync');

var nota1 = user.question("Qual a primeira nota? ");
var nota2 = user.question("Qual a segunda nota? ");
var nota3 = user.question("Qual a terceira nota? ");

var media = (((nota1+nota2)+nota3)/3);

if(media < 7){
    console.log("Voce reprovou de ano!");
}else if(media >= 7){
    console.log("Voce passou de ano!");
}else{
    console.log("Dados não consistentes")
}