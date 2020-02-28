var user = require('readline-sync');
var entr = user.question("Qual a palavra? \n");
var tamanho = entr.length
var letra = entr.charAt(2);
if(tamanho<3){
    console.log("Sua palavra não tem 3 letras!");
}
console.log(letra);


