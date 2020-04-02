var admin = require("firebase-admin");
var serviceAccount = require("./credenciais-atv21.json");
var user = require('readline-sync')
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://atividade-21.firebaseio.com"
});
function menu(){
console.log("Digite 1 para cadastrar um carro novo")
console.log("Digite 2 para ver todos os carros cadastrados")
console.log("Digite 3 para filtrar pelo maior valor")
console.log("Digite 4 para filtrar pelo menor valor")
console.log("Digite 5 para filtrar por um valor exato")
console.log("Digite 6 para sair do programa")
var wish = user.questionInt(">> ")
    if(wish === 1){
    //cadastra
    var nome = user.question("Qual o nome do carro?")
    var valorCarro = user.questionInt("Qual o valor do carro?")
    var carro = (nome, valorCarro) => ({ nome, valorCarro })
    var novoCarro = carro(nome,valorCarro)
    cadastraCarro(novoCarro)
    }else if(wish === 2){
    //mostra tudo
    }else if(wish === 3){
    //filtra pelo maior valor
    }else if(wish === 4){
    //filtra pelo menor valor
    }else if(wish === 5){
    //filtra por valor exato
    }else if(wish === 6){
        console.log("Volte sempre!")
        process.exit()
    }else{
        console.log("Dados incorretos")
        menu()
    }
}

var db = admin.database()
var referenciaCarros = db.ref("Carros")
var criaCarroUsuRef = nome => db.ref(`Carros/${nome}`)

function cadastraCarro(carro){ 
    var carroCriado = criaCarroUsuRef(carro.nome)
    carroCriado.set({
        Carro: carro.nome,
        Valor: carro.valorCarro
    })
    console.log("Carro cadastrado")
    menu()
}
menu()