const express = require('express')
const bodyParser = require('body-parser')
const urlencodeParser = bodyParser.urlencoded({ extended: false })
const port = process.env.PORT || 3000
const app = express()
const site = require('./site')

app.use(express.json())


//rotas
app.get('/', function(req, res) {
    res.send('ok')
})

app.post('/', urlencodeParser, (req, res) => {
    var nome = req.body.nome
    var cod = req.body.cod
    console.log(req.body)
    site.videosite(nome, cod)
        .then((modelo) => {
            res.json(modelo)
        })
})


app.get('/link/:modelo', (req, res) => {
    var nome = req.params.modelo
    var cod = 1
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
