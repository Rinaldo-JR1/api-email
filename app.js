require('dotenv').config()
const express = require('express')
const nodemailer = require('nodemailer')

const USER = process.env.USER;
const PASS = process.env.PASS;
const PORT = process.env.PORT;
const app = express()

app.get('/send', (req, res) => {
    const transporter = nodemailer.createTransport({
        host: 'smtp-mail.outlook.com',
        port: '587',
        auth: { user: USER, pass: PASS }
    })
    transporter.sendMail({
        from: USER,
        to: process.env.RECIVER,
        subject: 'Teste',
        text: 'Hello World'
    }).then(info => {
        res.send(info)
    }).catch(err => {
        res.send(err)
    })
})

// Porta padrão ignore
app.get('/', (req, res) => {
    res.send('Hello world')
})

app.listen(PORT, () => console.log(`Rodando na porta ${PORT}`))