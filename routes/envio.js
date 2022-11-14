const router = require('express').Router();

require('dotenv').config()
const nodemailer = require('nodemailer')
const USER = process.env.USER;
const PASS = process.env.PASS;

/**
 * Api envio de email via post
 * @param req -- Dados requeridos com o texto e destinatario
 * @param res -- Responta do envio
 */
router.post('/send', (req, res) => {
    const transporter = nodemailer.createTransport({
        host: 'smtp-mail.outlook.com',
        port: '587',
        auth: { user: USER, pass: PASS }
    })
    transporter.sendMail({
        from: USER,
        to: req.body.reciver,
        subject: req.body.title,
        html: `
            <p>Your name is <b>${req.body.name}</b></p>
        `
    }).then(info => {
        console.log(info)
        res.send(info)
    }).catch(err => {
        res.send(err)
    })
})


module.exports = router;
