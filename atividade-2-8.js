var user = require('readline-sync');
var palavra = user.question("Insira a palavra!");
var min = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","x","w","y","z"]
var mai = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","X","W","Y","Z"]
if(palavra == min){
    console.log("Sua letra é minuscula!");
}else if(palavra == mai){
    console.log("Sua letra é maiuscula!");
}

