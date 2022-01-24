// carregando o modulo http já presente no NODE
var http = require('http');

http.createServer(function(requisicao, responsta) {
    responsta.end("bem vindo ao meu site")
}).listen(8181);
console.log("meu servidor ta rodando")