var user = require('readline-sync');
var axios = require('axios').default;
var admin = require('firebase-admin')
var serviceAccount = require("./credenciais.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://jogo-24ebd.firebaseio.com"
})
var pokedex = 'Pokédex'
var db = admin.database().ref(pokedex)

function mostraPokedex(){
    db.on('value', snapshot => {
        console.log(snapshot.val())
      menu()
      })
}

function pokemonsDoMesmoTipo(){
    var id = user.question('Digite o id ou nome do seu Pokemon: ')
    axios.get(`https://pokeapi.co/api/v2/type/${id}`)
        .then(resultado => {
            console.log(resultado.data.pokemon)
            menu()
        })
    .catch(erro => {
        console.log('erro ao consultar Pokemon...')
        menu()
    })
}
function cadastraPokemon(param){
    var treinador = user.question('Digite seu Nome\n>>  ')
    var id = param
    axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then(resultado =>{
          db.push({
              treinador: treinador,
              id: id,
              pokemon: resultado.data.name,
              tipo: resultado.data.types,
              habilidades: resultado.data.abilities
          })
          console.log('Seu Pokemon foi adicionado ao pokedex!\n')
          var wish2 = user.questionInt("Deseja saber o dano causado pelo seu novo pokemom?\n1 - Sim\n2 - Nao\n>> ")
          if(wish2 === 1){
            detalhesTipo()
          }else if(wish2 === 2){
            menu()
          }else{
              console.log("Dados errados")

          }
      })
    .catch(erro =>{
        console.log('erro ao cadastrar o pokemon'+erro)
        menu()
    })
  }

  function detalhesTipo(){
    var nomeHabi = user.question('Digite o nome da abilidade que deseja saber dos Pokemons: ')
    axios.get(`https://pokeapi.co/api/v2/type/${nomeHabi}`)
        .then(resultado =>{
            var arrayDamage1 = resultado.data.damage_relations.double_damage_to
            var arrayDamage2 = resultado.data.damage_relations.no_damage_to
            var arrayDamage3 = resultado.data.damage_relations.half_damage_to
            console.log("--------------------")
            console.log("'No damage to' nos seguientes Pokemons")
            arrayDamage2.map((resp) => {
                console.log("Nome:")
                console.log(">> "+resp.name)
                console.log("URL:")
                console.log(">> "+resp.url)
            })
            console.log("--------------------")
            console.log("'Double damage to' nos seguientes Pokemons")
            arrayDamage1.map((resp) => {
                console.log("Nome:")
                console.log(">> "+resp.name)
                console.log("URL:")
                console.log(">> "+resp.url)
            })
            console.log("--------------------")
            console.log("'Half damage to' nos seguientes Pokemons")
            arrayDamage3.map((resp) => {
                console.log("Nome:")
                console.log(">> "+resp.name)
                console.log("URL:")
                console.log(">> "+resp.url)
            })
            console.log("Outros pokemons da tipo '"+resultado.data.name+"'")
            var arrayPoke = resultado.data.pokemon
            arrayPoke.map((resul) => {
                console.log("Nome: ")
                console.log(resul.pokemon.name)
                console.log("----------------------")
            })
            
            menu()
        })
    .catch(erro =>{
        console.log('erro ao consultar o Pokemon...'+erro)
        menu()
    })
}

function pokemons(nome) {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${nome}`)
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
        nomeHabili.map((nome) => {
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
        nomeMove.map((nome) => {
            console.log("Nome: ")
            console.log(nome.move.name)
            console.log("URL: ")
            console.log(nome.move.url)
            console.log("__________")
        })
        var arrayTipo = nome.data.types
        console.log("Tipo")
        arrayTipo.map((respost) => {
            console.log("__________")
            console.log(respost.type.name)
        })
        
        var addpoke = user.questionInt("Voce deseja adicionar esse pokemom a sua pokedex?\n1 - Sim\n2 - Nao")
        if(addpoke === 1){
            cadastraPokemon(nome.data.id)
        }else if(addpoke === 2){
            menu()
        }
    }).catch((erro) => {
        console.log("Erro ao pegar p Pokemon" + erro)
    })
}

function descriPoke(){
    console.log("-----------------------------Descricao da Habilidade-----------------------------")
    var nome = user.question("Digite o nome ou o id do pokemon que deseja saber a descricao: \n>>")
    axios.get(`https://pokeapi.co/api/v2/pokemon/${nome}`)
    .then((desc)=>{
        var arrayDesc = desc.data.abilities
        arrayDesc.map((ent) => {
            var urlDesc = ent.ability.url
            axios.get(urlDesc)
                .then((descUrl) => {
                    var arrayDesc2 = descUrl.data.effect_entries
                    arrayDesc2.map((entr)=>{
                        console.log("--------------------")
                        console.log("Nome da Habilidade")
                        console.log(">> "+ent.ability.name)
                        console.log("Descricao da Habilidade")
                        console.log(">> "+entr.effect)
                    })
                
                })
            
        })
    })
}

function menu(){
var wish = user.questionInt("Voce deseja:\n1 - Ver todos os Pokemons?\n2 - Inserir um Pokemom?\n3 - Descobrir o tipo do pokemom\n4 - Mostrar a sua pokedex\n5 - Mostrar dados de dano de habilidade especifica\n6 - Mostrar discricao da habilidade do pokemon\n>> ")
if(wish == 1){
axios.get('https://pokeapi.co/api/v2/pokemon?offset=0&limit=964')
    .then((nome) => {
        var nomesTodos = nome.data.results
        nomesTodos.filter((nomes) => {
            console.log(nomes.name)
            console.log("__________")
    })
    }).catch((erro) => {
        console.log("Erro ao pegar o pokemon " + erro)
    })
}else if(wish === 2){
var pokemon = user.question("Qual o nome ou o id do pokemon?\n>>").toLowerCase();
    pokemons(pokemon)
}else if(wish === 3){
    pokemonsDoMesmoTipo()
}else if(wish === 4){
    mostraPokedex()
}else if(wish === 5){
    detalhesTipo()
}else if(wish === 6){
    descriPoke()
}else{
    console.log("Dados incorretos")
    menu()
}
}
menu()