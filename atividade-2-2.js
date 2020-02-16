var user = require('readline-sync');
var grau = user.question("Qual a medida que esta sendo usada? 1-Celsius 2-Fahrenheit ");
var valor = user.question("Quantos graus? ");
var cel = (valor - 32) * 5/9;
var fah = (valor*9/5) + 32; 

if(grau == 1){
    console.log("O valor em Fahrenheit e: " + fah);
}else if(grau == 2){
    console.log("O valor em Celsius e: " + cel);
}else{
    console.log("Dados incompativeis");
}
