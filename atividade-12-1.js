var user = require('readline-sync');
var carros = [];
class carro {
    constructor(nome,modelo,cor){
        this.nome = nome;
        this.modelo = modelo;
        this.cor = cor;
    }
}
for(var x = 0;x<2;x++){
    var nome = user.question("Qual o nome do seu carro?\n");
    var modelo = user.question("Qual o modelo do seu carro?\n");
    var cor = user.question("Qual a cor do seu carro?\n");
    var carroNovo = new carro(nome,modelo,cor);
    carros.push(carroNovo)
    console.log("Adicione o segundo carro!")
    }
    if(carros[0].nome == carros[1].nome && carros[0].modelo == carros[1].modelo){
        console.log("Seus carros são iguais!");
    }else{
        console.log("Seus carros são diferentes!");
        console.log(carros[0]);
        console.log(carros[1]);
    }



