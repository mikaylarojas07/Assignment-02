const express = require('express');
const app = express()
const port = 3000

app.get('/home', (req, res) => {
  res.send('Home page')
})

app.get('/aboutme', (req, res) => {
  res.send('About Me page')
})

app.get('/projects', (req, res) => {
  res.send('Projects page')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})