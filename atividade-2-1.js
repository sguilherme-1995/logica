var user = require('readline-sync');

var produto = user.question("Qual o valor do produto? ");
console.log("Agora informe quantas moedas tem em seu cofrinho!");
var real1 = 1;//Aqui está o valor da moeda
var cent50 = 0.5;
var cent25 = 0.25;
var cent10 = 0.10;
var cent5 = 0.05;
var cent1 = 0.01;

var real1x = user.question("Quantas moedas de 1 Real? ");//aqui entra o valor pelo qual a moeda vai ser multiplicado
var cent50x = user.question("Quantas moedas de 50 centavos? ");
var cent25x = user.question("Quantas moedas de 25 centavos? ");
var cent10x = user.question("Quantas moedas de 10 centavos? ");
var cent5x = user.question("Quantas moedas de 5 centavos? ");
var cent1x = user.question("Quantas moedas de 1 centavos? ");

var real1f = real1*real1x;//e aqui é o valor que vai ser computado no cofrinho
var cent50f = cent50*cent50x;
var cent25f = cent25*cent25x;
var cent10f = cent10*cent10x;
var cent5f = cent5*cent5x;
var cent1f = cent1*cent1x;

var cofrinho = (real1f+cent50f+cent25f+cent10f+cent5f+cent1f)

if(produto < cofrinho){
    console.log("Voce pode comprar o produto!");
}else if(produto > cofrinho){
    console.log("Voce não tem dinheiro para comprar!");
}else{
    console.log("Dados incompativeis");
}