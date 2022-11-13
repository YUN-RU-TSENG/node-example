const express = require('express')
const router = express.Router()
const users = require('../db/users.js')

router.get('/', (request, response, next) => {
    response.status(200).send(`
        <h2>Home Page</h2>
        <nav>
            <a href="http://localhost:3000/">home</a> |
            <a href="http://localhost:3000/user">user</a>
        </nav>
        <p>
            目前共有 ${users.length} 名用戶
        </p>
    `)
})

module.exports = router
