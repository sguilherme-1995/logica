var num = 1000;
var bd1 = 0;
var bd2 = 0;

while(num > 0){
    if(num % 5 == 0){
        bd1 = bd1 + num;
    }
    if(num % 3 == 0){
        bd2 = bd2 + num;
    }
    num--
}
console.log("A soma dos multiplos por 5 é: " + bd1);
console.log("A soma dos multiplos por 3 é: " + bd2);

