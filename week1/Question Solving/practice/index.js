
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

app.get('/', function(req, res) {
  res.send('Hello World!')
})
app.get('/suraj', function(req, res) {
    res.send('<h1>suraj<\h1>')
    
})

  
app.listen(port, function() {
  console.log(`Example app listening on port ${port}`)
})
