const express = require('express')
const app = express()

// middleware
app.use((request, response, next) => {
    console.log('Middleware first')

    // 調用 next 執行下一個 middleware
    next()
})

// middleware
// 會匹配 /user/* 開頭的所有 path
app.use('/user', (request, response, next) => {
    console.log('Middleware second')
    response.status(200).send(`
        <h2>User Page</h2>
        <ul>
            <li>Tommy</li>
            <li>Amy</li>
            <li>Nancy</li>
        </ul>
    `)

    // ! 不可以這樣寫，express response send 後，最終執行 response.end()，於是此次 response 結束，不該再針對此次回應有任何操作
    // response.send(`<h2>Home Page</h2>`)

    // ! 不可以這樣寫，express response send 後，最終執行 response.end()，於是此次 response 結束，不該再針對此次回應有任何操作
    // next()
})

// middleware
// 會匹配 /* 開頭的所有 path
app.use('/', (request, response, next) => {
    console.log('Middleware third')
    response.status(200).send(`
        <h2>Home Page</h2>
    `)
})

app.listen(3000)
