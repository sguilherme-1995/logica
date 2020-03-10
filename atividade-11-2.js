var user = require('readline-sync');
var FasamImc = require('fasam-imc-calc');
console.log("Calculador de Indice de Massa Corporal!\n\n")
var peso = user.questionFloat("Qual o seu peso?\n>>");
var altura = user.questionFloat("Qual a sua altura?\n>>");

var imc = new FasamImc(peso, altura)

console.log(`Seu IMC é ${imc.calc()}`)