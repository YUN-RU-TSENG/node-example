const express = require('express')

const app = express()

app.use('/', (request, response, next) => {
    console.log('show this middleware')
    next()
})

app.use('/', (request, response, next) => {
    response.send('<h1>Home</h1>')
})

app.listen(3000)
