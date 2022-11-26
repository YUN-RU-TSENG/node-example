const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const userRoutes = require('./routes/user')
const homeRoutes = require('./routes/home')
const app = express()

app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'views'))

app.use(bodyParser.urlencoded({ extended: false }))

app.use(express.static(path.join(__dirname, 'public')))

console.log(path.resolve('./'))
app.use(userRoutes)
app.use(homeRoutes)

app.listen(3030)
