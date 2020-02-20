var user = require('readline-sync');
var num = user.questionInt("Qual o numero?  ");
var maior = 0;
var menor = num;

while(num != -1){
    var num = user.questionInt("Qual o proximo numero?  ");
        if(num < menor && num != -1){
            menor = 0;
            menor = menor + num;
        }
        if(num > maior && num != -1){
            maior = 0;
            maior = maior + num;
        }

}
console.log("O maior numero e: "+maior);
console.log("O menor numero e: "+menor);
