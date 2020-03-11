var user = require('readline-sync');
var alunos = [];
class Aluno{
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }
}
for(var x = 1; x<4;x++){
    var nome = user.question(`Qual o nome do ${x} aluno?\n`);
    var idade = user.questionInt(`Qual a idade do ${x} aluno?\n`);
    var nomeIdadeAluno = new Aluno(nome, idade);
    alunos.push(nomeIdadeAluno);
    }
if(alunos[0].idade > alunos[1].idade && alunos[0].idade > alunos[2].idade){
    console.log(`O aluno ${alunos[0].nome} é o mais velho com ${alunos[0].idade} anos`)
}else if(alunos[1].idade > alunos[0].idade && alunos[1].idade > alunos[2].idade){
    console.log(`O aluno ${alunos[1].nome} é o mais velho com ${alunos[1].idade} anos`)
}else if(alunos[2].idade > alunos[0].idade && alunos[2].idade > alunos[1].idade){
    console.log(`O aluno ${alunos[2].nome} é o mais velho com ${alunos[2].idade} anos`)
}else if(alunos[0].idade == alunos[1].idade){
    console.log(`Os alunos mais velhos sao ${alunos[0].nome} e o ${alunos[1].nome} com ${alunos[0].idade} anos`);
}else if(alunos[2].idade == alunos[1].idade){
    console.log(`Os alunos mais velhos sao ${alunos[2].nome} e o ${alunos[1].nome} com ${alunos[1].idade} anos`);
}else if(alunos[0].idade == alunos[2].idade){
    console.log(`Os alunos mais velhos sao ${alunos[0].nome} e o ${alunos[2].nome} com ${alunos[0].idade} anos`);
}
//loucura mas deu bom!
