var user = require('readline-sync');


for(var i=0; i<5; i++){
    var nome = user.question("Qual o nome do aluno?\n >> ");
    var nota1 = user.questionInt("Qual a primeira nota?\n >> ");
    var nota2 = user.questionInt("Qual a segunda nota?\n >> ");

    var notaA = (nota1/100)*30;
    var notaB = (nota2/100)*70;
    var notaFinal = notaA+notaB;

    console.log("O aluno "+nome+" tem uma media: "+notaFinal);

}
    console.log("Programa encerrado! ");

