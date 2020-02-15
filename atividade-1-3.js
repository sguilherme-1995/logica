var user = require('readline-sync');
var senha;
senha = 1234;

var senhacolocada = user.question("Digite a senha para invadir a NASA!  ");

if(senhacolocada == senha){
    console.log("Voce agora esta sendo procurado pelo FBI!");
}else{
    console.log("Nao foi hoje cara!");
}