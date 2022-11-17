const express = require('express')
const router = express.Router()
const users = require('../db/users.js')

router.get('/', (request, response, next) => {
    response.status(200).render('home', { users })
})

module.exports = router
