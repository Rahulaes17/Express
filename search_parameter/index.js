const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/search', (req, res) => {
    let query = req.query.q
    let name = req.query.name
    let location = req.query.location
    
    res.send(`You searched for: ${query}<br>Your name is: ${name}<br>The location is: ${location}`)
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})
