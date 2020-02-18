var user = require('readline-sync');
var num = user.questionInt("Qual o numero?  ");
var num1 = 1

while(num1 < num){

    if(num % 2 == 0){
    num = num -2;
    console.log(num);
    }else{
        num--;
    }
    
}

