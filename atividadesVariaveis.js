//1-a Declare uma variável dentro de uma função e tente acessar a mesma fora da função
// function varialvelFuncao(){
//     var varDeDentro = "Variavel Interna"
//     return varDeDentro
// }
// varialvelFuncao()
// console.log(varDeDentro)
//Resposta: Não da pra chamar nenhuma variavel para fora de uma função

//1-b Declare uma variável dentro de um bloco e tente acessar a mesma fora do bloco
// var nome = 'Guilherme'
// if(nome === 'Guilherme'){
//     var novoNome = "O nome é igual"
// }
// console.log(novoNome)
//Resposta: Para chamar de dentro de um if (Bloco), só se pode usar declaração 'var', pois a let e a const
// não podem sair de um bloco

//1-c Declare duas vezes a mesma variável no mesmo escopo
// var nome = 'Guilherme'
// if(nome === 'Guilherme'){
//     var nome = "O nome na variavel agora e esse"
// }
// console.log(nome)
//Resposta: A unica variavel que pode ser redefinida é a 'var', a let muda mas não sai do bloco, e a 
// const continua com o mesmo valor sem se alterar

//1-d Declare uma variável fora de uma função, declare a mesma variável dentro de uma função e depois 
// imprima seu valor depois de executar essa função
// var nome = 'Guilherme'
// function mudaNome(){
//     nome = 'Outro nome'
//     return nome
// }
// console.log(nome)
// mudaNome()
// console.log(nome)
//Resposta: Quando a variavel é alterada dentro de uma função a variavel que foi declarada antes com o mesmo nome
// se altera após a chamada da função

//1-e Declare uma variável fora de um bloco, declare a mesma variável dentro de um bloco e depois imprima seu 
// valor depois do bloco
// var nome = 'Guilherme'
// if(nome === 'Guilherme'){
//     var nome = 'O nome mudou aqui'
// }
// console.log(nome)
//Resposta: A variavel se altera de dentro de um bloco caso seja uma 'var', uma const ou let não saem do bloco

//1-f Declare uma variável e mude o valor dela depois
// var nome = 'Guilherme'
// var nome = 'Outro nome'
// console.log(nome)
//Resposta: A variavel só se altera se for 'var', caso seja uma 'const' ela não muda caso seja chamada denovo