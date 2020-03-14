var axios = require('axios').default;
axios.get('https://breaking-bad-quotes.herokuapp.com/v1/quotes')
    .then(frase =>{
        console.log(frase.data[0].quote)
        console.log(frase.data[0].author)
    })
