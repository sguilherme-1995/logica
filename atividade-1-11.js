var user = require('readline-sync');

var nota1 = user.questionInt("Qual a primeira nota? ");
var nota2 = user.questionInt("Qual a segunda nota? ");
var nota3 = user.questionInt("Qual a terceira nota? ");

var media = (((nota1+nota2)+nota3)/3);

if(media < 7){
    console.log("Voce reprovou de ano!");
}else if(media >= 7){
    console.log("Voce passou de ano!");
}else{
    console.log("Dados não consistentes")
}