var user = require('readline-sync');
var salario = user.question("Qual o seu salario?");
var valimp = user.question("Qual o valor do imprestimo requerido?");
var parcelas = user.question("Em quantas parcelas?");

var valparcela = valimp/parcelas;
var porcsalario = (salario/100)*30;

if(parcelas <= 0){
    console.log("Sua parcela nao pode ser menor que 0");
}else{

if(porcsalario >= valparcela){
    console.log("Seu imprestimo foi aprovado");
}else if(porcsalario <= valparcela){
    console.log("Seu imprestimo nao foi provado");

}
}
