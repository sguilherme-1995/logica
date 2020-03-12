var user = require('readline-sync');
var fs = require('fs');
var carJson = fs.readFileSync('./cars.json');
var carros = JSON.parse(carJson);
var x = 0;

 carros.map((carro)=>{
    var i = carro.Car.split(" ")
    if(i[0] == "Ford")
    x++
})
console.log(`Existem ${x} carros da Ford na lista!`);
