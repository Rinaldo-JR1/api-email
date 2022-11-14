require('dotenv').config()
const express = require('express')

const PORT = process.env.PORT;
const app = express()
app.use(express.json())
// Rota de envio API
const envio = require('./routes/envio')
app.use('/envio', envio)


// Porta padrão ignore
app.get('/', (req, res) => {
    res.send('Hello world')
})

app.listen(PORT, () => console.log(`Rodando na porta ${PORT}`))