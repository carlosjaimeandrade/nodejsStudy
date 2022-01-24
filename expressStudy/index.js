const express = require('express') // inportando o express
const app = express(); // iniciando e passando para uma variavel



app.listen(4000, function(erro) {
    if (erro) {
        console.log('ocorreu um erro')
    } else {
        console.log('servidor inicial com sucesso')
    }
})