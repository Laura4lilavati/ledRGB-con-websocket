const express = require('express')
const jf = require('johnny-five')
const WebSocket = require('ws')
const path = require('path');
const port = 3000

const wss = new WebSocket.Server({port: 3001})
const app = express()
const circuito = new jf.Board()

circuito.on('ready', prender)

function prender () {
   let rgb = new jf.Led.RGB({
      pins: [10, 11, 9],
         isAnode:true})
   
   rgb.color('#ff00ff') 

   wss.on('connection', function (ws, req) {
   console.log('Conectado...')
   ws.on('message', function (data) {
      console.log(data)
      rgb.color(data)
   })
   })
}

app.use(express.static(path.join(__dirname, 'public')))

app.listen(port)
console.log(`Servidor escuchando en http://localhost:${port}`)