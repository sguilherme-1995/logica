var fs = require('fs');
var carJson = fs.readFileSync('./cars.json');
var carros = JSON.parse(carJson);
var x = 0

carros.map((carro)=>{
    for(var i = 0;i<carros.length;i++){

        if(x<carros[i].Horsepower){
            x = carro.Horsepower
        }
    }
    console.log(x)
})

    