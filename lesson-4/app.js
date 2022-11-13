const express = require('express')
const app = express()
const userRoutes = require('./routes/user.js')
const homeRoutes = require('./routes/home.js')

// middleware
app.use((request, response, next) => {
    console.log('Middleware first')

    // 調用 next 執行下一個 middleware
    next()
})

// middleware
// 會匹配 /user/* 開頭的所有 path
app.use(userRoutes)
app.use(homeRoutes)

// middleware
// 會匹配 /* 開頭的所有 path
app.use((request, response, next) => {
    console.log('Middleware third')
    response.status(404).send(`
        <h2>Not found</h2>
    `)
})

app.listen(3000)
