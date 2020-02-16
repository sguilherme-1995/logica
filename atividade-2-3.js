var user = require('readline-sync');
var ddi = user.question("Qual o DDI?");

var num = ["Estados Unidos", "Alemanha", "Argentina", "Brasil", "Portugal"]

if(ddi == 35){
    var num = num[4];
    console.log(num);

}else if(ddi == 55){
    var num = num[3];
    console.log(num);
}else if(ddi == 54){
    var num = num[2];
    console.log(num);
}else if(ddi == 49){
    var num = num[1];
    console.log(num);
}else if(ddi == 1){
    var num = num[0];
    console.log(num);
}else{
    console.log("DDI não existente ou não registrado!");
}
