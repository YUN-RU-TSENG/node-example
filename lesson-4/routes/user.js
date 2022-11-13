const express = require('express')
const users = require('../db/users.js')
const router = express.Router()

router.get('/user', (request, response, next) => {
    response.status(200).send(`
        <html lang="en">
            <head>
                <meta charset="UTF-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>User</title>
                <link rel="stylesheet" href="/css/main.css" />
            </head>
            <body>
                <h2>User Page</h2>
                <nav>
                    <a href="http://localhost:3000/">home</a>
                    <a href="http://localhost:3000/user">user</a>
                </nav>
                <form action="/add-user" method="POST">
                    <label for="user-name">user name</label>
                    <input type="text" name="user" required id="user-name" />
                    <button type="submit">add user</button>
                </form>
                <ul>
                    ${users
                        .map(
                            (user) => `
                    <li>用戶：${user}</li>
                    `
                        )
                        .join('')}
                </ul>
                <p>目前共有 ${users.length} 名用戶</p>
            </body>
        </html>
    `)
})

router.post('/add-user', (request, response, next) => {
    const { user } = request.body
    users.push(user)
    console.log(`Add user ${user} success!`)
    response.redirect('/user')
})

module.exports = router
