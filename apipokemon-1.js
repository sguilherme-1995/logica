var user = require('readline-sync');
var axios = require('axios').default;
var admin = require('firebase-admin')
var serviceAccount = require("./credenciais.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://jogo-24ebd.firebaseio.com"
})
var db = admin.database()
//pokemomRef é para fazer com que dentro do nome do treinador dentro do banco de dados seja salvo o nome do pokemon e ai sim dentro suas caracteristicas
var pokemomRef = poke => db.ref(`Pokedéx/${nome}/${poke}`)
//treinadorRef é para separar dentro do banco de dados por nome do treinador
var treinadorRef = nome => db.ref(`Pokedéx/${nome}`)
var pokedex = ref => db.ref(ref)

//Aqui é a busca no banco de dados do firebase, onde os dados são encontrados baseado no nome do treinador
function mostraPokedex(){
    var nome = user.question("Qual o nome do treinador?\n>>")
    pokedex(treinadorRef(nome)).on('value', snapshot => {
        if(snapshot.val() === null){
            console.log('Treinador não encontrado, tente novamente');
            menu()
        }else{
            pokedex(treinadorRef(nome)).on('child_added', snapshot => {
            var pokedex = snapshot.val()
            var habi = snapshot.val().habilidades
            var tipo = snapshot.val().tipo
            habi.map(habi => {
                var url = habi.ability.url
                axios.get(url)
                .then(resultado =>{ 
                    console.log('O nome do treinador é : ' + pokedex.treinador);
                    console.log(`O ID do seu pokemon é : ${pokedex.id}`);
                    console.log('O nome do pokemon é : ' + pokedex.pokemon);
                    console.log('A habilidade do seu pokemon é: ' + habi.ability.name)
                    console.log('e a sua descrição: ')
                    console.log(resultado.data.effect_entries[0].effect.replace('\n',' '))
                    tipo.map(tipo => {
                        console.log('O tipo do seu pokemon é: '+ tipo.type.name);
                    })
                    console.log('-------------------------------------------------------------') 
                
                })
            })
            })        
        }
    })

}

//Aqui é a função que mostra os pokemons com o mesmo tipo, tive problemas pra puxar dados de outra api para rodar nessa, por 
// isso deve se entrar com os dados do tipo
function pokemonsDoMesmoTipo(){
    var id = user.question('Digite o id ou nome do seu Pokemon: ')
    axios.get(`https://pokeapi.co/api/v2/type/${id}`)
        .then(resultado => {
            console.log("Os pokemons iguais a esse são: ")
            var arrayMesmo = resultado.data.pokemon
            arrayMesmo.filter((igual) =>{
                console.log(igual.pokemon.name)
                console.log("---------------------------------")
            })
            console.log("Esses são todos os pokemons iguais ao seu!")
            menu()
        })
    .catch(erro => {
        console.log('erro ao consultar Pokemon...')
        menu()
    })
}

//Aqui é a função que faz o cadastro do pokemon no banco de dados do firebase, não sei se é possivel uma pessoa sem o meu login ver esses dados
function cadastraPokemon(param){
var pokemomRef = poke => db.ref(`Pokedéx/${nome}/${poke}`)
    var nome = user.question('Digite seu Nome\n>>  ')
    var id = param
    axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then(resultado =>{
          var varTipo = resultado.data.types
          var poke = pokemomRef(id)
          poke.set({
              treinador: nome,
              id: id,
              pokemon: resultado.data.name,
              tipo: resultado.data.types,
              habilidades: resultado.data.abilities
          })
          console.log('Seu Pokemon foi adicionado ao pokedex!\n')
          var wish2 = user.questionInt("Deseja saber o dano causado pelo seu novo pokemom?\n1 - Sim\n2 - Nao\n>> ")
          if(wish2 === 1){
            varTipo.map((nome) => {
                detalhesTipo(nome.type.name)
            })
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

//Aqui é a função do DAMAGE, os tres dados vem dentro de um array, e eu estou rodando dentro de um .map
// e essa função só é acessada apos o cadastro do pokemon no banco de dados
function detalhesTipo(parame){
    axios.get(`https://pokeapi.co/api/v2/type/${parame}`)
        .then(resultado =>{
            console.log(`Detalhes do tipo ${parame}`)
            var arrayDamage1 = resultado.data.damage_relations.double_damage_to
            var arrayDamage2 = resultado.data.damage_relations.no_damage_to
            var arrayDamage3 = resultado.data.damage_relations.half_damage_to
            console.log("<-------------------->")
            console.log("'No damage to' nos seguientes Pokemons")
            arrayDamage2.map((resp) => {
                console.log("Nome:")
                console.log(">> "+resp.name)
            })
            console.log("<-------------------->")
            console.log("'Double damage to' nos seguientes Pokemons")
            arrayDamage1.map((resp) => {
                console.log("Nome:")
                console.log(">> "+resp.name)
            })
            console.log("<-------------------->")
            console.log("'Half damage to' nos seguientes Pokemons")
            arrayDamage3.map((resp) => {
                console.log("Nome:")
                console.log(">> "+resp.name)
            })
            console.log("Outros pokemons da tipo '"+resultado.data.name+"'")
            var arrayPoke = resultado.data.pokemon
            arrayPoke.map((resul) => {
                console.log("Nome: ")
                console.log(resul.pokemon.name)
                console.log("----------------------")
            })
            //Não pude chamar o menu aqui pois existem pokemons com mais de um tipo
            // menu()
        })
    .catch(erro =>{
        console.log('erro ao consultar o Pokemon...'+erro)
        menu()
    })
}

//Aqui é a função que eu fiz antes de receber a atividade, ao rodar essa função todos os pokemons existentes na api aparecem com 
//habilidades e até os movimentos
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

//Aqui é a função que mostra a descrição da habilidade do pokemon desejado, baseado no id ou no nome do pokemon
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

//Essa é a função do menu onde a aplicação se baseia
function menu(){
var wish = user.questionInt("Voce deseja:\n1 - Ver todos os Pokemons?\n2 - Inserir um Pokemom?\n3 - Descobrir o tipo de um pokemom\n4 - Mostrar a sua pokedex\n5 - Mostrar dados de dano de habilidade especifica\n6 - Mostrar discricao da habilidade do pokemon\n>> ")
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

//não pude fazer a função do menu ser chamada em todas outras funções, quando o retorno da api é mais de um dado e o then 
// é rodado mais de uma vez o menu atropela o processo e impede que todos os dados sejam mostrados 