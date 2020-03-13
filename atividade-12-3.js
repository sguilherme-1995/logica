var user = require('readline-sync');
var listaDeNum = []
var continuar = true
var modulo = require('./modulo_media')



while(continuar){
    var num = user.questionInt("Qual o numero?\n");
    listaDeNum.push(num)
    var desejaContinuar = user.questionInt("Quer adicionar mais um?\n1-Sim\n2-Nao\n")
    if(desejaContinuar == 2){
        continuar = false;
    }
}

var tamanho = listaDeNum.length
var final = (modulo.mediaDeNumeros(listaDeNum)/tamanho)
console.log(`A media dos numeros e ${final}`)
