var user = require('readline-sync');
var entrada = [];
var qnt = user.question("Quantos produtos serao cadastrados?\n");
var resultado = 0;
var n = 1;
var tamanho = entrada.length

while(qnt > 0){
    var prod = user.question("Qual o valor do "+n+" produto?\n");
    entrada.push(prod);
    n++;
    qnt--;
}
var precoTotal = user.questionInt("Qual o valor pago?\n");
var i =0;
while(i<tamanho){
    console.log("O produto custa "+entrada[i]);
    resultado = resultado+entrada[i];
    i++
}
if(precoTotal>resultado){
    console.log("O seu troco é: "+precoTotal-resultado);
}else if(precoTotal<resultado){
    console.log("O valor pago é insuficiente!");
}else{
    console.log("Voce não possui troco!");
}

