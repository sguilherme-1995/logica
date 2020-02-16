var user = require('readline-sync');

var ang1 = user.question("Qual o primeiro angulo? ");
var ang2 = user.question("Qual o segundo angulo? ");
var ang3 = user.question("Qual o terceiro angulo? ");

if(ang1 == ang2 && ang1 == ang3 && ang2 == ang3){
    console.log("Triângulo Retângulo");
}else if((ang1+ang2+ang3)/3 > 90){
    console.log("Triângulo Obtusângulo");
}else if((ang1+ang2+ang3)/3 < 90){
    console.log("Triângulo Acutângulo");
}else{
    console.log("Não é um triângulo");
}