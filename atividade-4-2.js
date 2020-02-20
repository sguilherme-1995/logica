var user = require('readline-sync');

var num1 = user.questionInt("Qual o primeiro numero? (entre 1 e 100)  ");

while (num1 > 100 || num1 < 1) {
    console.log("Numero invalido");
    var num1 = user.questionInt("Qual o primeiro numero? (entre 1 e 100)  ");
}
var num2 = user.questionInt("Qual o segundo numero? (entre 1 e 100)  ");
while (num2 > 100 || num2 < 1) {
    var num2 = user.questionInt("Qual o segundo numero? (entre 1 e 100)  ");
    console.log("Numero invalido");
}

if (num1 <= num2) {
    while (num1 < num2) {
        if (num1 % 7 == 0 && num1 % 5 == 0) {
            console.log("Ping-Pong! ");
            num1++;
        } else if (num1 % 7 == 0) {
            console.log("Ping! ");
            num1++
        } else if (num1 % 5 == 0) {
            console.log("Pong! ");
            num1++;
        } else {
            console.log(num1);
            num1++;
        }


    }

} if (num2 <= num1) {
    while (num2 <= num1) {
        if (num2 % 7 == 0 && num2 % 5 == 0) {
            console.log("Ping-Pong! ");
            num2++;
        } else if (num2 % 7 == 0) {
            console.log("Ping! ");
            num2++
        } else if (num2 % 5 == 0) {
            console.log("Pong! ");
            num2++;
        } else {
            console.log(num2);
            num2++;
        }
    }
}
