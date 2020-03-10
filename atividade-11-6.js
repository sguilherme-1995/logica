var user = require('readline-sync');
var chalk = require('chalk');
var anoNsc = user.questionInt("Quantos anos?\n");
var mesNsc = user.questionInt("Quantos meses?\n");
var diaNsc = user.questionInt("Quantos dias?\n");

function calculoDeDias(anoNsc,mesNsc,diaNsc){
   
    return (anoNsc*365)+(mesNsc*30)+diaNsc;
}
console.log(chalk.bgRedBright(`Voce tem ${calculoDeDias(anoNsc,mesNsc,diaNsc)} dias de vida!`));
