var user = require('readline-sync');
var ageCalculator = require('age-calculator');
let {AgeFromDate} = require('age-calculator');
var ano = user.questionInt("Qual o seu ano de nascimento?\n");
var mes = user.questionInt("Qual o seu mes de nascimento?\n");
var dia = user.questionInt("Qual o dia do seu nascimento/\n");

var ageFromDate = new AgeFromDate(new Date(ano,mes,dia)).age;
console.log(`Voce tem ${ageFromDate} anos`);

