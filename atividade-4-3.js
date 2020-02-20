var user = require('readline-sync');

var entra = user.questionInt("Qual o numero?  ");
var let = String.prototype.repeat(0,entra);
var str = "*";


while(0 < entra){
    console.log(str.repeat(entra));
    
    entra--;
}
