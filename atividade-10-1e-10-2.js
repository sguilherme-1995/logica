var user = require('readline-sync');
var fs = require('fs');
function cadastroCarro(){
    var carro = new Object();
    carro.cor = user.question("Qual a cor do seu carro?\n")
    carro.modelo = user.question("Qual o modelo do seu carro?\n")
    carro.marca = user.question("Qual a marca do seu carro?\n");
    return carro
}
var resultado = cadastroCarro();
var serialCarro = JSON.stringify(resultado)
var arquivoCarro = 'carro.json'
fs.writeFileSync(arquivoCarro, serialCarro)
console.log(resultado);

