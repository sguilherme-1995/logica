var user = require('readline-sync');
var usu1 = user.question("Qual o nome do primeiro jogador? \n >> ");
var usu2 = user.question("Qual o nome do segundo jogador? \n >> ");
var game = true;
var pedra
var teso 
var papel
var mov1 
var mov2

while(game == true){
    console.log("Agora o "+usu1+" escolhe! \n (a) Pedra \n (b) Papel \n (c) Tesoura ");
    var esco1 = user.question("",{hideEchoBack: true});
    if(esco1 == "a" || esco1 == "b" || esco1 == "c"){
        if(esco1 == "a"){
           mov1 = pedra;
        }else if(esco1 == "b"){
            mov1 = papel;
        }else if(esco1 == "c"){
           mov1 = teso;
        }
    }else{
        console.log("Opcao invalida! ");
    }
    console.log("Agora o "+usu2+" escolhe! \n (a) Pedra \n (b) Papel \n (c) Tesoura ");
    var esco2 = user.question("",{hideEchoBack: true});
    if(esco2 == "a" || esco2 == "b" || esco2 == "c"){
        if(esco2 == "a"){
           mov2 = pedra;
        }else if(esco2 == "b"){
            mov2 = papel;
        }else if(esco2 == "c"){
           mov2 = teso;
        }
    }else{
        console.log("Opcao invalida! ");
    }
    if(mov1 == pedra && mov2 == teso){
        console.log("Pedra vence a Tesoura! O "+usu1+" venceu a partida");
    }else if(mov2 == pedra && mov1 == teso){
        console.log("Pedra vence a Tesoura! O "+usu2+" venceu a partida");
    }else if(mov1 == pedra && mov2 == papel){
        console.log("Papel vence Pedra! O "+usu1+" venceu a partida");
    }else if(mov2 == pedra && mov1 == papel){
        console.log("Papel vence Pedra! O "+usu2+" venceu a partida");
    }else if(mov1 == teso && mov2 == papel){
        console.log("Tesoura vence Papel! O "+usu1+" venceu a partida");
    }else if(mov2 == teso && mov1 == papel){
        console.log("Tesoura vence Papel! O "+usu2+" venceu a partida");
    }
}

console.log("O jogo acabou!");