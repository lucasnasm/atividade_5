//importando o modulo do express
const express = require('express')

//instancia do express
const server = express()

//importando o modulo de rotas
const {  conversionRouter ,  studentRouter } = require('./routers')

server.use('/static', express.static('static'));

//declaracao de PORTA
const PORT = 3000

//carregando rotas
server.get('/alunos/todos', studentRouter.list)
server.get('/moeda/:valor_real', conversionRouter.conversion)

//executando o servidor e ouvindo na porta PORT
server.listen(PORT, () => {
    console.log(`Servindor rodando na porta: ${PORT}`)
})