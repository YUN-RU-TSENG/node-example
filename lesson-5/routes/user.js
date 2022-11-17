const express = require('express')
const users = require('../db/users.js')
const router = express.Router()

router.get('/user', (request, response, next) => {
    response.status(200).render('users', { users })
})

router.post('/add-user', (request, response, next) => {
    const { user } = request.body
    users.push(user)
    console.log(`Add user ${user} success!`)
    response.redirect('/user')
})

module.exports = router
