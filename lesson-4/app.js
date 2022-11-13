const express = require('express')
const userRoutes = require('./routes/user.js')
const homeRoutes = require('./routes/home.js')
const bodyParser = require('body-parser')
const app = express()
const path = require('path')

// middleware
app.use(bodyParser.urlencoded({ extended: false })) // 幫忙解析 request body 數據，建議使用外部庫，因為 express 曾經有移除過內置 API
app.use(express.static(path.join(__dirname, 'public')))
app.use(userRoutes)
app.use(homeRoutes)

// middleware
// 會匹配 /* 開頭的所有 path
app.use((request, response, next) => {
    console.log('Middleware third')
    response.status(404).sendFile(path.join(__dirname, 'views', 'notFound.html'))
})

app.listen(3000)
