var user = require('readline-sync');
var entrada = [];
var qnt = user.questionInt("Quantos produtos serao cadastrados?\n");
var resultado = 0;
var n = 1;


while(qnt > 0){
    var prod = user.questionFloat("Qual o valor do "+n+" produto?\n");
    entrada.push(prod);
    n++;
    qnt--;
}
var precoTotal = user.questionInt("Qual o valor pago?\n");

for(var i = 0;i<entrada.length;i++){
    resultado = resultado + entrada[i];
}
var troco = precoTotal-resultado;
if(resultado<=precoTotal){
    console.log("Sua compra pode ser efetuada! E o troco no valor de "+troco);
    
}else if(resultado>precoTotal){
    console.log("O valor e insuficiente para a compra dos produtos!");
}
