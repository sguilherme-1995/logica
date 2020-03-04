var user = require('readline-sync');
var num = user.questionInt("Qual o numero?\n");
function numeroPerfeito(num){
    var soma = 0;
    for(var x = 1;x<num;x++){
        if(num%x==0){
            soma = soma+x
        }
    }
    if(soma==num){
        return 'e perfeito!'
    }else{
        return 'nao e perfeito!'
    }

}
console.log("O numero colocado "+numeroPerfeito(num));
