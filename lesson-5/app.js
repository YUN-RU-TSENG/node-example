const express = require('express')
const userRoutes = require('./routes/user.js')
const homeRoutes = require('./routes/home.js')
const bodyParser = require('body-parser')
const path = require('path')
const app = express()

/* template engine */
app.set('view engine', 'pug')
app.set('views', 'views')

/* middleware */

// 幫忙解析 request body 數據，建議使用外部庫，因為 express 曾經有移除過內置 API
app.use(bodyParser.urlencoded({ extended: false }))

// 設置 Client 可訪問的靜態資源資料夾路徑，這樣用戶就可以訪問 public 內的 assets
app.use(express.static(path.join(__dirname, 'public')))

// 設置 user 相關的 request 處理，注意順序
app.use(userRoutes)

// 設置 home 相關的 request 處理，注意順序
app.use(homeRoutes)

// 處理 404 path，注意順序要在最後
app.use((request, response, next) => {
    console.log('Middleware third')
    response.status(404).render('notFound')
})

// 在 3000 port 監聽
app.listen(3000)
