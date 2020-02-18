var user = require('readline-sync');

var num = user.question("Qual o numero? ");

while(num > 0){
    if(num % num == 0){
        console.log(num)
    }

    num = num -1;
}
