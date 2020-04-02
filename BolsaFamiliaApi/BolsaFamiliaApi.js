var axios = require('axios');
var user = require('readline-sync');
var sS = require('string-similarity');

function menu(){
    console.log("------------------MENU------------------")
    console.log("Para saber o codigo IBGE de todos os municipios digite 1")
    console.log("Para saber as informacoes de um municipio digite 2")
    console.log("Para saber o codigo IBGE do seu municipio digite 3")
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
        
    }else if(entra === 3){
        municipioCerto()
    }else{
        console.log('Dados errados\nInsira novamente')
        menu()
    }
}
function dadosMuniCerto(parmUni){
    var mesUni = user.question("Digite o mes (MM)\n")
    var anoUni = user.question("Digite o ano (AAAA)\n")
    axios.get(`http://www.transparencia.gov.br/api-de-dados/bolsa-familia-por-municipio?mesAno=${anoUni}${mesUni}&codigoIbge=${parmUni}`)
    .then((results) => {
        var resultData = results.data
        resultData.filter((resposta) => {
            var idMunicipio = resposta.municipio.codigoIBGE   
            console.log("No estado de "+resposta.municipio.uf.nome)
            console.log("A quantidade de beneficiarios em " + resposta.municipio.nomeIBGE + " e de "+ resposta.quantidadeBeneficiados)
            console.log("O valor total e: R$ "+resposta.valor)
            console.log("Cada beneficiario recebe em media: "+(resposta.valor/resposta.quantidadeBeneficiados))
            console.log("-------------")
            console.log("Digite 1 para saber qual a porcentagem de beneficiarios no seu municipio")
            console.log("Digite 2 para voltar para o menu")
            var resp = user.questionInt(">>")
            if(resp === 1){
                porcentBolsa(resposta.quantidadeBeneficiados, idMunicipio)
            }else if(resp === 2){
                menu()
            }
        })

        }).catch((erro) => {
            console.log("Erro ao pegar dados da API " + erro)
        })
}
function compararStrings(para){
    axios.get(`https://servicodados.ibge.gov.br/api/v1/localidades/municipios/${para}`)
    .then((resultMuni) => {
        var arrayCompara = resultMuni.data
        
        // arrayCompara.map((resu) => {
        //     sS.findBestMatch(para, arrayCompara)
             
        // }) 
        
        var num = sS.compareTwoStrings(para,resultMuni.data.nome)
        console.log(num)
    })
}
function municipioCerto(){
    console.log("---------------Digite o nome do municipio para saber o codigo IBGE---------------")
    var muni = user.question("Qual o nome do municipio?\n")
    axios.get(`https://servicodados.ibge.gov.br/api/v1/localidades/municipios/${muni}`)
    .then((resultMuni) => {
            console.log(compararStrings(muni))
            var paraMuniCerto = resultMuni.data.id
            console.log("O codigo IBGE de "+resultMuni.data.nome+" e:")
            console.log(paraMuniCerto)
            console.log("--------------------------")
            console.log("Digite 1 para saber os dados do bolsa familia sobre seu municipio")
            console.log("Digite 2 para voltar para o menu")
            var ent = user.questionInt(">> ")
            if(ent === 1){
                dadosMuniCerto(paraMuniCerto)
            }else if(ent === 2){
                menu()
            }else{
                console.log("Dados errados reinicie o processo")
                menu()
            }
            

    }).catch((erro) => {
        console.log("Erro ao pegar dados da API " + erro)
    })
}
function porcentBolsa(parame1,parame2){
    axios.get(`https://servicodados.ibge.gov.br/api/v3/agregados/6579/periodos/2019/variaveis/9324?localidades=N6[${parame2}]`)
        .then((res) => {
            var população = res.data.serie;
            var resultFinal = (população)/(parame1)*100
            console.log(população)
            console.log(resultFinal+"% dos habitantes do municipios recebem o beneficio")
        })
}
function municipios(){
axios.get('https://servicodados.ibge.gov.br/api/v1/localidades/municipios')
    .then((result) => {
        var resultData = result.data
        resultData.filter((nome) => {
                console.log("Nome: "+nome.nome)
                console.log("Codigo IBGE: "+nome.id)
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
            console.log("Cada beneficiario recebe em media: "+(resposta.valor/resposta.quantidadeBeneficiados))
            menu()
        })

        }).catch((erro) => {
            console.log("Erro ao pegar dados da API " + erro)
        })
}
// municipios()
menu()