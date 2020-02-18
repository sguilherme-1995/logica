var user = require('readline-sync');

var palavra = user.question("Insira uma palavra! ");
var tamanho = palavra.length;
var n = 0;

while(n < tamanho){
    console.log(palavra.charAt(n));  
    n = n + 1;
}