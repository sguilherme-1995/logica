// https://www.breakingbadapi.com/api/episodes/
var user = require('readline-sync');
var axios = require('axios').default;
var entrada = user.questionInt("Qual o episodio?")

axios.get(`https://www.breakingbadapi.com/api/episodes/${entrada}`)
    .then(dados =>{
        console.log(dados.data);
    })
    .catch(console.error("O episodio nao existe"))

