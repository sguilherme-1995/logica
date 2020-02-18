var user = require('readline-sync');
var palavra = user.question("Qual a palavra? ");
var tamanho = palavra.length;

while(tamanho >= 0){
    console.log(palavra.charAt(tamanho));  
    tamanho = tamanho - 1;
}

