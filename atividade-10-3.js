var fs = require('fs');
var serialCarro = fs.readFileSync('carro.json');
var carro = JSON.parse(serialCarro);

console.log(carro.cor)
console.log(carro.modelo)
console.log(carro.marca)
