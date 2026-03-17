const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send("Welcome to Rahul's World")
})

app.get('/about', (req, res) => {
  res.send("This is the about page of the website hihihihi")
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})

