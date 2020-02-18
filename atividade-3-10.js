var user = require('readline-sync');

var num = user.question("Qual o numero? ");
var divi = 0;
while(divi >= 0){
    if(num % divi == 0){
        console.log(divi)
    }

    divi = divi +1;
}
