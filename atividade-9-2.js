var user = require('readline-sync');
var num = user.questionInt("Qual o numero? \n");
function primoFun(num){
    var primo = ''
    m = 2
    contador = 0
    while(m<num){
        if(num%m==0){
           contador++;
        }
        if(contador>0){
            return primo ='Falso';
        }
        m++
        return primo = 'Verdadeiro'
        
    }
    

}
console.log(primoFun(num))


