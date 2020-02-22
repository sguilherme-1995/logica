var user = require('readline-sync');
var denovo1 = true;
var numfato = 1;
for(var n = 0;denovo1;n++){
    var num = user.questionInt("Qual o numero para o cauculo fatorial?\n >> ");
        numfato = num-1;  i= num-1
        for(var i=0; i<=num;i++){
          
           numfato = num*i;
            
        }  console.log(numfato);
        var denovo2 = user.questionInt("Deseja fazer mais um calculo? \n1 - Sim\n2 - Nao\n");
        if(denovo2 == 2){
            denovo1 = false;
        }
}
console.log("Programa encerrado! ");
