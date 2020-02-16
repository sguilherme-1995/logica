//Não consegui arrumar as casas decimais da conta dividido em 3 vezes

var user = require('readline-sync');

var produto = user.questionInt("Qual o valor do produto? ");
var formpaga = user.question("Qual a forma de pagamento?  1-A vista cheque ou dinheiro | 2-A vista cartao de credito | 3-Em 2 vezes | 4-Em 3 vezes  ");
var val1 = produto - (produto/100)*10;
var val2 = produto - (produto/100)*15;
var val3 = produto/2;
var val4 = (produto + (produto/100)*10)/3;

if(formpaga == 1){
    console.log("O valor a ser pago e: " + val1);
}else if(formpaga == 2){
    console.log("O valor a ser pago e: " + val2);
}else if(formpaga == 3){
    console.log("O valor da parcela e: " + val3);
}else if(formpaga == 4){
    console.log("O valor da parcela é: " + val4);
}else if(produto < 0){
    console.log("Valor do produto errado!");
}else{
    console.log("Dados Errados");
}


