var user = require('readline-sync');
var num1 = user.questionInt("Qual o primeiro numero?  ");
var num2 = user.questionInt("Qual o segundo numero?  ");


div = (num1/num2);


if(div >= 1){
    console.log("Seu numero é divisivel !  " + div);
}else{
    console.log("Seu numero nao é divisivel!  " + div);
}
