var user = require('readline-sync');
var palavra = user.question("Insira a palavra!");
var letra = palavra.charCodeAt(0);


if(65>=letra<=90){
    console.log("Sua letra e minuscula!");
}else if(91>=letra<=122){
    console.log("Sua letra e maiuscula!");
}

