var user = require('readline-sync');
var numpes = 0;
console.log("Digite 'Final' para a contagem!");
while(true){
    

    var nome = user.question("Qual o nome da pessoa? ");
    if(nome == "Final" || nome == "final"){
        break;
    }
    var idade = user.questionInt("Qual a idade? ");
    numpes++;
    
}
console.log("O numero total de pessoas e: " + numpes);

