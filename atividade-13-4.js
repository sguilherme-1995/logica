var user = require('readline-sync');
var fs = require('fs');
var carJson = fs.readFileSync('./cars.json');
var carros = JSON.parse(carJson);
var x = 0;
var media = 0

carros.filter((carro)=>{
    if(carro.Origin === "Europe"){
        x++;
        media = media + carro.Horsepower
    }
}
)
media = media / x

console.log('a media de potencia dos carros da Europe : ' + media)