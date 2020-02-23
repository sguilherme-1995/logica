var user = require('readline-sync');
var premio = [1000, 5000, 10000, 25000, 50000, 100000, 200000, 300000, 500000, 1000000];
var premioAcumu = 0;
var perguntas = ['De quantos anos e constituido um seculo?\n','Qual e o coletivo de caes?\n','Qual e a maior floresta do planeta?\n',
'Qual e o naipe do baralho que tem o desenho de coracao?\n', 'Qual atriz estrelou no filme: “A lagoa azul”?\n', 'Qual e o pais do tango?\n',
'Que imperador pos fogo em Roma?','O que e um oboe?\n', 'Quantos quilates tem o ouro puro?','Qual oceano tem o maior volume de agua?'];
var alterna = ['A) 50 \nB) 100 \nC) 1,000 \nD) 1,500 \n','A) Matilha \nB) Rebanho \nC) Cardume \nD) Manada \n',
'A) Negra \nB) de Sherwood \nC) da Tijuca \nD) Amazonica \n','A) Ouros \nB) Paus \nC) Copas \nD) Espadas \n',
'A) Alicia Silverstone \nB) Brooke Shields \nC) Julia Roberts \nD) Jessica Lange \n','A) Uruguai \nB) Argentina \nC) Paraguai \nD) Espanha \n',
'A) Trajano \nB) Nero \nC) Brutus \nD) Caligula \n','A) Vulcao \nB) Comida \nC) Instrumento Musical \nD) Tribo indigena \n',
'A) 18 \nB) 20 \nC) 24 \nD) 30 \n','A) Atlantico \nB) Pacifico\nC) Indico\nD) Artico \n'];
var respCerta = ['b','a','d','c','b','b','b','c','c','b'];
var play = true;
var n = 0;



while(play = true){
    console.log("Comeca agora o show do milhao! ");
    while(n<10){
        
        console.log("Essa pergunta vale "+premio[n]+" reais");
        var respUsu = user.question("Pergunta: \n "+perguntas[n]+"\n"+alterna[n]);
         if(respUsu != respCerta[n]){
        console.log("Resposta errada!\n Infelizmente voce perdeu tudo!\n");
             break;
            }
            if(respUsu == respCerta[n]){
                premioAcumu = premio[n]
                console.log("Certa resposta! ");}
                if(n < 9 && respUsu == respCerta[n]){
                    var desistir = user.questionInt("Voce deseja desistir?\n 1 - Quero desistir!\n 2 - Quero continuar!\n ");
                    if(desistir == 1){
                        premioAcumu = premioAcumu/2;
                        play = false;
                        console.log("Voce esta saindo com "+premioAcumu+" reais");
                        break;
                    }
                }else{
                    break
                }
                n++
            }
            
            if(n==9 && respUsu == respCerta[n]){
                console.log("--------------------  PARABENS  --------------------\n");
                console.log("----------  VOCE GANHOU UM MILHAO DE REAIS  ----------\n");
                play = false;
            }

            var desistir = user.questionInt("Voce deseja jogar novamente?\n 1 - Quero desistir!\n 2 - Quero continuar!\n ");
            if(desistir == 1){
                play = false;
                break;
            }
   
        
        // if(respUsu != respCerta[n]){
        // console.log("Resposta errada!\n Infelizmente voce perdeu tudo!\n Deseja jogar novamente?");}
        //    if(ganhou = 2){desistir == 1
        // } if(desistir == 1){
        //     play = false;
            
        
        
                // if(respUsu == respCerta[n]){console.log("Deseja jogar novamente?\n")}
                // var jogarDenovo = user.questionInt("1 - Sim\n 2 - Nao\n");
                //     if(jogarDenovo == 2){
                //         play = false;
                //         }
                                  
        n = 0
                    }
console.log("Jogo encerrado! \n Obrigado por jogar! ");


//ainda falta:
//sistema de pulo
//array multidimensional para multiplas perguntas, alternativas e respostas
//Math.round(Math.random()/100)*porcentagem para cada alternativa dentro do array multidimensional


