var user = require('readline-sync');

var tam1 = user.question("Qual a medida do primeiro lado?  ");
var tam2 = user.question("Qual a medida do segundo lado?  ");
var tam3 = user.question("Qual a medida do terceiro lado?  ");

if(tam1 == tam2 && tam2 == tam3 && tam1 == tam3){
    console.log("Triângulo Equilátero");
}else if(tam1 == tam2 || tam2 == tam3 || tam1 == tam3){
    console.log("Triângulo Isóscele");
}else if(tam1 != tam2 && tam2 != tam3 && tam1 != tam3){
    console.log("Triângulo Escaleno");
}else{
    console.log("Não compativel");
}
