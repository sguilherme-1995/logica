var user = require('readline-sync');

var num = 1;
var total1 = 0;
var total2 = 1;

while(num <= 5){
   
    var nument = user.questionInt("Qual o "+num+" numero? ");
    if(nument % 2 == 0){
        total1 = total1+nument;
        
    }else{
        total2 = total2*nument;
    }
    num++;
}
console.log("Soma dos pares: " + total1);
console.log("Produto dos impares: " + total2);
