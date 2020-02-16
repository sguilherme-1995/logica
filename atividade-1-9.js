var user = require('readline-sync');

var ang1 = user.questionInt("Qual o primeiro angulo? ");
var ang2 = user.questionInt("Qual o segundo angulo? ");
var ang3 = user.questionInt("Qual o terceiro angulo? ");

if(ang1 == 90 && ang2 == 90 && ang3 == 90){
    console.log("Triângulo Retângulo");
}else if((ang1+ang2+ang3)/3 > 90){
    console.log("Triângulo Obtusângulo");
}else if((ang1+ang2+ang3)/3 < 90){
    console.log("Triângulo Acutângulo");
}else{
    console.log("Não é um triângulo");
}