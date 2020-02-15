var user = require('readline-sync');

var numlados = user.question("Quantos lados tem seu poligono?");
var tamlados = user.question("Quantos centimetros (cm) tem cada lado?");
if(numlados == 3){
    console.log("Seu Triangulo tem " + (tamlados*3) + "cm de área total!");
}else if(numlados == 4){
    console.log("Seu Quadrado tem " + (tamlados*4) + "cm de area total!");
}else if(numlados == 5){
    console.log("Seu Pentagono tem " + (tamlados*5) + "cm de area total!");
}else{
    console.log("Quantidade de lados inexistente ou não registrada!");
}

