const express = require('express')
const jf = require('johnny-five')

const port=3000
const app = express()
const circuito = new jf.Board()

circuito.on('ready',prender)

function prender (){
   let led = new jf.Led(13)
   led.blink(300) }

app.get('/', function (req,res){
   res.send('El Pedro no es inge de verdad')
})

app.listen(port)
console.log(`Servidor escuchando en http://localhost:${port}`)