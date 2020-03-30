var axios = require('axios');
var user = require('readline-sync');

function menu(){
    console.log("------------------MENU------------------")
    console.log("Para saber o codigo IBGE de todos os municipios digite 1")
    console.log("Para saber as informacoes de um municipio digite 2")
    var entra = user.questionInt(">> ")
    if(entra === 1){
        municipios()
    }else if(entra === 2){
        console.clear();
        console.log("------------------Digite aqui o codigo IBGE do seu municipio------------------")
        var idMuni = user.question("Digite o codigo IBGE de 7 numeros\n>> ")
        var anoCheck = user.question("Digite o ano (AAAA) \n>> ")
        var mesCheck = user.question("Digite o mes (MM) \n>> ")
        dadosBolsa(anoCheck,mesCheck,idMuni)
        
    }else{
        console.log('Dados errados\nInsira novamente')
        menu()
    }
}
function municipios(){
axios.get('https://servicodados.ibge.gov.br/api/v1/localidades/municipios')
    .then((result) => {
        var resultData = result.data
        resultData.filter((nome) => {
                console.log(nome.nome)
                console.log(nome.id)
        })
        menu()
    }).catch((erro) => {
        console.log("Erro ao pegar dados da API " + erro)
    })
}
function dadosBolsa(parm1,parm2,parm3){
    axios.get(`http://www.transparencia.gov.br/api-de-dados/bolsa-familia-por-municipio?mesAno=${parm1}${parm2}&codigoIbge=${parm3}`)
        .then((results) => {
        var resultData = results.data
        resultData.filter((resposta) => {
            console.log("No estado de "+resposta.municipio.uf.nome)
            console.log("A quantidade de beneficiarios em " + resposta.municipio.nomeIBGE + " e de "+ resposta.quantidadeBeneficiados)
            console.log("O valor total e: R$ "+resposta.valor)
            menu()
        })

        }).catch((erro) => {
            console.log("Erro ao pegar dados da API " + erro)
        })
}
// municipios()
menu()