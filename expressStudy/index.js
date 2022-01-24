const express = require('express') // inportando o express
const app = express(); // iniciando e passando para uma variavel

// criando rota e enviando resposta
app.get('/', function(req, res) {
    res.send("ola mundo") //enviando a resposta os codigos abaixo não serão lidos
})

app.get('/blog', function(req, res) {
    res.send("ola blog") //enviando a resposta os codigos abaixo não serão lidos
})

app.get('/canal/youtube', function(req, res) {
    res.send("ola ao canal do youtube") //enviando a resposta os codigos abaixo não serão lidos
})

app.get('/ola/:nome/:empresa', function(req, res) {
    res.send(`oi ${req.params.nome} da empresa ${req.params.empresa}`) //enviando a resposta os codigos abaixo não serão lidos
})




app.listen(4000, function(erro) {
    if (erro) {
        console.log('ocorreu um erro')
    } else {
        console.log('servidor inicial com sucesso')
    }
})