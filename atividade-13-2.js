var user = require('readline-sync');
var fs = require('fs');
var carJson = fs.readFileSync('./cars.json');
var carros = JSON.parse(carJson);
var x = 0;

carros.filter((carroJP)=>{
    if(carroJP.Origin == "Japan"){
        x++;
    }
})
console.log(`Tem ${x} carros japoneses!`);