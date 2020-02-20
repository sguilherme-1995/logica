var user = require('readline-sync');
var num = 1;
var total = 0;
var entrada = user.questionInt("Qual o "+num+" numero?  ");
total = total+entrada;
while(num <= 8){
    var entrada = user.questionInt("Qual o "+num+" numero?  ");
    num++;

    if(entrada>total){
        total = entrada;
    }
    
}
console.log(total);
