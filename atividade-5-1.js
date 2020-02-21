var user = require('readline-sync');
var palavra = user.question("Digite aqui uma palavra!\n>>  ");
var tamanho = palavra.length;

for(var i=0; i<tamanho;i++){
    if(palavra.charAt(i) === "a"){
        console.log("> A");
    }else{
    console.log("> "+palavra.charAt(i));
    }
}


