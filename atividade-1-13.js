var user = require('readline-sync');

var num = user.question("Digite um numero? ");

if(num > 0){
    console.log(num*2);
}else if(num < 0){
    console.log(num*3);
} else if(num == 0){
    console.log("O numero 0 nao pode ser usado");
}else{
    console.log("Dados incompativeis!");
}
