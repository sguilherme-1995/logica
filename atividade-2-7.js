var user = require('readline-sync');

var senhacolo = user.question("Qual a senha? ");

if(senhacolo == "batatafrita"){
    console.log("Senha correta");
}else {
    console.log("Senha incorreta")
}

