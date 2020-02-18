var user = require('readline-sync');
var palavra = user.question("Insira a palavra!");
var min = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","x","w","y","z"]
var mai = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","X","W","Y","Z"]
var letra = palavra.charAt(0);
var minL = min.length;
var mail = mai.length;

if(letra == min[minL]){
    console.log("Sua letra e minuscula!");
}else if(letra == mai[mail]){
    console.log("Sua letra e maiuscula!");
}

