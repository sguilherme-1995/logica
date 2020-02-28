var user = require('readline-sync');
var pala = user.question("Qual a palavra? \n");
if(pala.endsWith("al")){
    console.log("Palavra valida!");
}else{
    console.log("Palavra invalida! ");
}
