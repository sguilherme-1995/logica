var admin = require("firebase-admin");
var serviceAccount = require("./credenciais-atv21.json");
var user = require('readline-sync')
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://atividade-21.firebaseio.com"
});
var db = admin.database()
var referenciaCarros = db.ref("Carros")
var criaCarroUsuRef = nome => db.ref(`Carros/${nome}`)

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
    console.clear()
    console.log("-----------Cadastre um carro-----------")
    var nome = user.question("Qual o nome do carro?\n>> ").toLowerCase()
    var valorCarro = user.questionInt("Qual o valor do carro?\n>> ")
    var carro = (nome, valorCarro) => ({ nome, valorCarro })
    var novoCarro = carro(nome,valorCarro)
    cadastraCarro(novoCarro)
    }else if(wish === 2){
        console.clear()
        console.log("-----------Todos os carros do banco-----------")
        mostrarTudo()
    //mostra tudo
    }else if(wish === 3){
        console.clear()
        console.log("-----------Do maior valor pro maior-----------")
        maiorProMenor()
    //filtra pelo maior valor
    }else if(wish === 4){
        console.clear()
        console.log("-----------Do menor valor pro maior-----------")
        menorProMaior()
    //filtra pelo menor valor
    }else if(wish === 5){
        console.clear()
        console.log("-----------Exatamente o valor-----------")
        valorExato()                                                                                                                                                                                                                                                   
    //filtra por valor exato
    }else if(wish === 6){
        console.clear()
        console.log("Programa encerrado!")
        process.exit()
    }else{
        console.clear()
        console.log("Dados incorretos")
        menu()
    }
}



function cadastraCarro(carro){ 
    var carroCriado = criaCarroUsuRef(carro.nome)
    carroCriado.set({
        Carro: carro.nome,
        Valor: carro.valorCarro
    },menu)
    console.log("Carro cadastrado")
    
}
function mostrarTudo(){
    db.ref(referenciaCarros).orderByChild('Valor')
        .on('child_added', snapshot =>{
            console.log(snapshot.val())
        },menu)
        
}
function maiorProMenor(){
    var ent = user.questionFloat("A partir de qual valor?\n>> ")
    db.ref(referenciaCarros).orderByChild('Valor').startAt(ent)
        .on('child_added', snapshot => {
            console.log(snapshot.val())
        },menu)
}
function menorProMaior(){
    var ent = user.questionFloat("A partir de qual valor?\n>> ")
    db.ref(referenciaCarros).orderByChild('Valor').endAt(ent)
        .on('child_added', snapshot => {
            console.log(snapshot.val())
        },menu)
}
function valorExato(){
    var ent = user.questionFloat("A partir de qual valor?\n>> ")
    db.ref(referenciaCarros).orderByChild('Valor').equalTo(ent)
        .on('child_added', snapshot => {
            console.log(snapshot.val())
        },menu)
}
menu()