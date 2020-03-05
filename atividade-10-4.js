var user = require('readline-sync');
var fs = require('fs');
var listaCarros = []
var mostrar = false
var pergunta = user.questionInt("Deseja mostrar os carros (1) ou cadastrar um carro novo (2)?\n")
function cadastroCarro(){
    var carro = new Object();
    carro.cor = user.question("Qual a cor do seu carro?\n")
    carro.modelo = user.question("Qual o modelo do seu carro?\n")
    carro.marca = user.question("Qual a marca do seu carro?\n");
    return carro
}
while(mostrar == false){
    var resultado = cadastroCarro();
    listaCarros.push(resultado)
    var serialCarro = JSON.stringify(listaCarros)
    var arquivoCarro = 'carros.json'
    fs.writeFileSync(arquivoCarro, serialCarro)
    console.log(resultado);
    console.log(listaCarros)
    var pergunta = user.questionInt("Deseja mostrar os carros (1) ou cadastrar um carro novo (2)?\n")
        if(pergunta === 1){
            mostrar = true
        }else if(pergunta === 2){
            mostrar = false
        }else{
            console.log("Resposta invalida!");
            mostrar = false
            var pergunta = user.questionInt("Deseja mostrar os carros (1) ou cadastrar um carro novo (2)?\n")
        }
}
console.log(listaCarros)