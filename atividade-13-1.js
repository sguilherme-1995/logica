var user = require('readline-sync');
var fs = require('fs');
var carJson = fs.readFileSync('./cars.json');
var carros = JSON.parse(carJson);
var potUsu = user.questionInt("Qual a potencia desejada?\n>>");


var carrosFiltrados = carros.filter((carro)=>{
    if(carro.Horsepower >= potUsu){
        return true;
    }else{
        return false
    }
        
})
console.log(carrosFiltrados);



