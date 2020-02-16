var user = require('readline-sync');

var sexo = user.question("Qual o seu sexo? F-Feminino M-Masculino ");
var estadocivil = user.question("Qual o seu estado civil? 1-Casado(a) 2-Solteiro(a)" );
var tempcas;
if(sexo == "F" || sexo == "f"){
    
    if(estadocivil == 1){
        tempcas = user.question("A quantos anos voce esta casada?");
        console.log("Voce é casada a " + tempcas + " anos");
    }else{
        console.log("Sexo feminino e solteira!");
    }
}else if(sexo == "M" || sexo == "m"){
    if(estadocivil == 1){
        tempcas = user.question("A quantos anos voce é casado?");
        console.log("Voce e casado a " + tempcas + " anos");
    }else{
        console.log("Sexo masculino e solteiro");
    }
}else{
    console.log("Dados de entrada incorretos");
}
