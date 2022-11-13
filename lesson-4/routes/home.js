const express = require('express')
const router = express.Router()
const users = require('../db/users.js')

router.get('/', (request, response, next) => {
    response.status(200).send(`
        <html lang="en">
            <head>
                <meta charset="UTF-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Document</title>

            </head>
            <body>
                <h2>Home Page</h2>
                <nav>
                    <a href="http://localhost:3000/">home</a> |
                    <a href="http://localhost:3000/user">user</a>
                </nav>
                <p>
                    目前共有 ${users.length} 名用戶
                </p>
            </body>
        </html>
    `)
})

module.exports = router
