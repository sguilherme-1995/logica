var user = require('readline-sync');
var kw = user.question("Quantos kilowatts foram gastos esse mes? ");
var valkw = 1.039/7;
valgasto = valkw*kw;
valdesconto = valgasto - ((valgasto/100)*10);
valfinal = valgasto-valdesconto;

if(valfinal > 0){
    console.log("O valor a ser pago esse mes e: " + valfinal);
}else if(valfinal < 0){
    console.log("O valor não pode ser computado!");
}else{
    console.log("Dados incorretos");
}


