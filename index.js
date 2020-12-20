const express = require('express')
const bodyParser = require('body-parser')
const urlencodeParser = bodyParser.urlencoded({ extended: false })
const port = process.env.PORT || 3000
const app = express()
const site = require('./site')

app.use(express.json())


//rotas
app.get('/', function(req, res) {})

app.post('/link', urlencodeParser, (req, res) => {
    var nome = req.body.nome
    var cod = req.body.cod
    console.log(req.body)
    site.videosite(nome, cod)
        .then((modelo) => {
            res.json(modelo)
        })
})

//inicializa o servidor
app.listen(port, () => {
    console.log('Servidor escutando na porta %d', port)
    console.log('Para encerrar o servidor pressione ctrl + c');
})