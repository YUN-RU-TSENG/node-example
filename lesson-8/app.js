const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')

// 初始化 app
const app = express()

// 設置 Client 能訪問的 public assets folder
app.use(express.static(path.join(__dirname, 'public')))

// 處理 request body 的 stream
app.use(bodyParser.urlencoded({ extended: false }))

// 設置 template 引擎
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

// 設置 router
const homeRoute = require('./routes/home')
const cartRoute = require('./routes/cart')
const adminRoute = require('./routes/admin')
app.use('/', homeRoute)
app.use('/cart', cartRoute)
app.use('/admin', adminRoute)

// 啟動 database
const { sequelize } = require('./utils/sequelize')
require('./model/index')

sequelize
    .sync()
    .then((result) => {
        // 啟動 app
        app.listen(3030)
    })
    .catch((error) => {
        console.log(error)
    })
