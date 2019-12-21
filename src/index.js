const express = require('express')
const jf = require('johnny-five')
const WebSocket = require('ws')

const port=3000

const wss = new WebSocket.Server({port:3001})
const app = express()
const circuito = new jf.Board()

circuito.on('ready',prender)

function prender (){
   let led = new jf.Led(13)
   led.blink(300)

   wss.on('connection', function (ws,req){
      console.log('Conectado...')
      ws.on('message', function (data){
         console.log(data)
      })
   })
}

app.use('/', express.static('public'))

app.listen(port)
console.log(`Servidor escuchando en http://localhost:${port}`)