var user = require('readline-sync');
var total = 0

    var numeb = 1;
    while(numeb <= 15){
        var nument = user.questionInt("Qual o " + numeb + " numero? ");
        //var total = nument;
        numeb++;    
        total = total+nument;
        console.log(total)
       
    }
    var media = total/15;
    console.log(media);



