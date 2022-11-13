const express = require('express')
const router = express.Router()

router.get('/user', (request, response, next) => {
    response.status(200).send(`
        <h2>User Page</h2>
        <ul>
            <li>Tommy</li>
            <li>Amy</li>
            <li>Nancy</li>
        </ul>
    `)
})

router.post('/add-user', (request, response, next) => {
    response.redirect('/')
})

module.exports = router
