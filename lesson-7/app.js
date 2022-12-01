const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')

// 建立 Server 實體
const app = express()

// 設置 Client 能訪問的 public assets folder
app.use(express.static(path.join(__dirname, 'public')))

// 處理 body 的 stream 並將處理好的結果傳遞給下個 middleware
app.use(bodyParser.urlencoded({ extended: false }))

// 設置 template engine
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

const homeRoute = require('./routes/home.js')
const cartRoute = require('./routes/cart.js')
const adminRoute = require('./routes/admin.js')

// 路由 middleware
app.use(homeRoute)
app.use(cartRoute)
app.use('/admin', adminRoute)

// 404
app.use('/', (request, response, next) => {
    response.send('404')
})

// 啟動監聽
app.listen(3000)
