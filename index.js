var express = require('express')

var app = express()

app.get('/', (req, res) => {
  res.json({
    ipaddress: req.ip,
    language: req.headers['accept-language'],
    software: req.headers['user-agent']
  })
})

app.listen(process.env.PORT || 5000)
