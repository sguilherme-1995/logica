var user = require('readline-sync');
var media = require('notas-universitarias-util');

const notas = {
    g1: user.questionFloat("Qual a primeira nota?\n"),
    g2: user.questionFloat("Qual a segunda nota?\n"),
    g3: user.questionFloat("Qual a terceira nota?\n")
}
console.log(media.default(4).media(notas).toFixed(2));
