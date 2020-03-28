var user = require('readline-sync');
var axios = require('axios').default;

//>>>>>>Descomentar para saber o nome de todos os Pokemons disponiveis<<<<<<<<
//
// axios.get('https://pokeapi.co/api/v2/pokemon?offset=0&limit=964')
//     .then((nome) => {
//         var nomesTodos = nome.data.results
//         nomesTodos.filter((nomes) => {
//             console.log(nomes.name)
//         })
//     })

var pokemon

    pokemon = user.question("Qual o nome do pokemon?\n>>").toLowerCase();

axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    .then((nome)=>{
        var nomeMove = nome.data.moves
        var nomeHabili = nome.data.abilities
        console.log("Nome")
        console.log(nome.data.forms[0].name);
        console.log("__________")
        console.log("Id")
        console.log(nome.data.id);
        console.log("__________")
        console.log("Habilidades: ")
        nomeHabili.filter((nome) => {
            console.log("__________")
            console.log("Nome: ")
            console.log(nome.ability.name)
            console.log("URL: ")
            console.log(nome.ability.url)
        })
        console.log("__________")
        console.log("Experiencia Base")
        console.log(nome.data.base_experience);
        console.log("__________")
        console.log("Altura")
        console.log(nome.data.height);
        console.log("__________")
        console.log("Movimentos")
        nomeMove.filter((nome) => {
            console.log("Nome: ")
            console.log(nome.move.name)
            console.log("URL: ")
            console.log(nome.move.url)
            console.log("__________")
        })
        console.log("Tipo")
        console.log(nome.data.types[0].type.name)
        console.log("__________")
    })
