function mediaDeNumeros(listaDeNum){
    var soma = 0
    listaDeNum.map(numero=>soma += numero)
       
    return soma
        
}
module.exports = {mediaDeNumeros}