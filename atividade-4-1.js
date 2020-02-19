var div = 50;
var num = 1;
while(num <= 50){
    if(num % 2 == 0){
        if(num % div == 0){
            if(num == 2){
                console.log(num+" - Numero Par Primo");
                num++;
                div--;
            }
               
            }else{
                console.log(num+" - Numero Par");
                num++;
                div--;
        }
    
    }else{
      
        if(num % div == 0 || num % div == num){
            console.log(num+" - Numero Impar Primo");
            num++;
            div--;
        
          
        }else{
            console.log(num+" - Numero Impar");
            num++;
            div--;
    
        }
}
num++;
div--;
}
// TUDO BUGADO