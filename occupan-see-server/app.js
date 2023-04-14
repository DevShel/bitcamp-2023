const express = require('express')
const fs = require('fs');
const app = express()
var cors = require('cors')
var bodyParser = require('body-parser')
const port = 2424
const https = require('https');
require('dotenv').config(); 

app.use(cors())
app.use(express.json());

notif = false

app.get('/pplUpdate', (req, res) => {
  const count = req.query.count
  console.log(count)
  fs.writeFileSync('count.txt', count);
  res.send('received ' + count + ' people')

  if (!notif && count > 14) {
    notif = true
    if(process.env.PROJECT)
      https.get(`https://n.kihtrak.com/?project=${process.env.PROJECT}&title=Maximium occupancy exceeded`)
  }
  if(count <= 14)
    notif = false
})

app.get('/ppl', (req, res) => {
  const count = fs.readFileSync('count.txt');
  res.send(count)
})


app.post('/currentImage', (req, res) => {
  const count = req.body.data
  fs.writeFileSync('img.txt', count);
  console.log('new img')
  res.send('received img')
})

app.get('/img', (req, res) => {
  const count = fs.readFileSync('img.txt');
  res.send(count)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})