var fs = require('fs');
var user = require('readline-sync');
var carJson = fs.readFileSync('./cars.json');
var carros = JSON.parse(carJson);

var entrada = user.question("Digite (A) para maior aceleracao ou (B) para maior potencia!\n")

if(entrada == "a"){
    carros.map((carro) => {
      var i = Math.max(carro.Acceleration)
      console.log(i)
    })
}else if(entrada == "b"){
    carros.map((carro) => {
       var x = Math.max(carro.Horsepower)
        console.log(x)
    })
    
}

