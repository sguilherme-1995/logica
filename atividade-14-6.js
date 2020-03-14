//https://newton.now.sh/simplify/
var user = require('readline-sync');
var axios = require('axios').default;

var entrada = user.question("Qual a conta?\n");
axios.get(`https://newton.now.sh/simplify/${entrada}`)
    .then((conta)=>{
        console.log(conta.data.result);

    })
