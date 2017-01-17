var express = require('express')

var app = express()

app.get('/', (req, res) => {
  console.log(req.headers)
  res.json({
    language: req.headers['accept-language'],
    software: req.headers['user-agent']
  })
})

app.listen(process.env.PORT || 5000)
