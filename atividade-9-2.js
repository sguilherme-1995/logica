var user = require('readline-sync');
var num = user.question("Qual o numero? \n");
function primoFun(num){
    var primo = 'Verdadeiro'
    m = 2
    contador = 0
    while(m<num){
        if(num%m==0){
            contador++
        }
        if(contador>0){
            primo = 'Falso'
        }
        m++
    }

}
console.log(primoFun(num))


