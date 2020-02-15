var user = require('readline-sync');

var macavarejo, macaatacado;
var macacomprada = user.question("Quantas macas voce deseja comprar? ");
macavarejo = 0.30;
macaatacado = 0.25;

if(macacomprada >= 12){
    macaatacado;
    console.log("Voce esta pagando " + macaatacado + "em cada maça.");
    console.log("O valor total de sua compra é: " + macaatacado*macacomprada);
}else if (macacomprada < 12 && macacomprada > 0){
    macavarejo;
    console.log("Voce esta pagando " + macavarejo + "em cada maça.");
    console.log("O valor total de sua compra é: " + macavarejo*macacomprada);
}else{
    console.log("Voce nao esta comprando nada! Mete o pe da minha loja!");
}