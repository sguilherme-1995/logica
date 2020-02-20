var user = require('readline-sync');
var saldo = 0;
var depo = 0;
var saque = 0;
var entrada = user.question("Qual a opcao desejada? \n (a) Consulta do saldo \n (b) Saque \n (c) Deposito \n (d) Sair\n >> ");


    if(entrada == "a" || entrada == "b" || entrada == "c" || entrada == "d"){
        while(entrada != "d"){
            var entrada = user.question("Qual a opcao desejada? \n (a) Consulta do saldo \n (b) Saque \n (c) Deposito \n (d) Sair\n >> ");
            if(entrada == "a"){
                console.log("Seu saldo é de: "+saldo+"\n");
            }else if(entrada == "b"){
                saque = user.questionInt("Qual o valor a ser sacado? \n  ");
                if(saldo > saque){
                    saldo = saldo - saque;
                }else{
                    console.log(">>Saldo insuficiente!<< \n");
                }
                
            }else if(entrada == "c"){
                depo = user.questionInt("Qual o valor do deposito? \n  ");
                saldo = saldo + depo;
            }
        }
        console.log(">>Programa encerrado!<< ");
        
    }else{
        console.log(">>Dado Incorreto!<<");
        var entrada = user.question("Qual a opcao desejada? \n (a) Consulta do saldo \n (b) Saque \n (c) Deposito \n (d) Sair\n >> ");
    }

// por algum motivo misterioso o primeiro loop do programa não roda, só apartir dele que funciona sem problemas!