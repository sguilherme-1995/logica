var numero1 = 1;
var numero2 = 50;
var n = numero1;
var m = 2;
var contador = 0
var primo = 'e Primo'

while(n<numero2){
    var par_impar = ''
    if(n%2==0){
        par_impar = "Par"
    }
    else{
        par_impar = "Ímpar"
    }
    
    m = 2
    contador = 0
    primo = 'e Primo'
    while(m<n){
        if(n%m==0){
            contador++
        }
        if(contador>0){
            primo = ''
        }
        m++
    }

    console.log("O numero "+n+' e '+par_impar+' '+primo)
    n++

}