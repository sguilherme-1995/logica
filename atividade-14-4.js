//https://api.postmon.com.br/v1/cep/
var user = require('readline-sync');
var axios = require('axios').default;

var cep = user.question("Qual o numero do seu CEP?\n");
axios.get(`https://api.postmon.com.br/v1/cep/${cep}`)
    .then(resposta => {
        console.log(resposta.data.bairro)
        console.log(resposta.data.cidade)
        console.log(resposta.data.estado_info)
        console.log(resposta.data.estado_info.codigo_ibge)


    })