const express = require('express')
const router = express.Router()

router.get('/', (request, response, next) => {
    response.status(200).send(`
        <h2>Home Page</h2>
    `)
})

module.exports = router
