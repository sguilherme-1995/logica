var user = require('readline-sync');
var fs = require('fs');
var carJson = fs.readFileSync('./cars.json');
var carros = JSON.parse(carJson);
var x = 0;
var i = 0
var final = carros.map((carroEUR)=>{
    if(carroEUR.Origin == "Europe"){
        var media = carroEUR.Horsepower;
        var mediaTotal = mediaTotal + media
        
        x++;
    }
    
    if(i == 406){
        mediaTotal = mediaTotal/x
        console.log(`A media total de HP dos carros da Europa ${mediaTotal}!`);
    }
    i++
})
console.log(final)

//dando erro



