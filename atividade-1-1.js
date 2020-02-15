var user = require('readline-sync');
var anodenascimento = user.question("Digite por favor o seu ano de nascimento: ")
var idade = 2020 - anodenascimento;

if(idade >= 18 && idade < 65){
    console.log("Você deve votar!");
}else if(idade >= 16 && idade < 18){
    console.log("Seu voto é facultativo!");
}else if(idade >= 65){
    console.log("Seu voto é facultativo!");
}else{
    console.log("Você ainda não pode votar!");
}
