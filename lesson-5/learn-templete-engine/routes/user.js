const express = require('express')
const router = express.Router()
const users = require('../data/users')

router.get('/user', (req, res, next) => {
    res.render('user', { users, title: 'user' })
})

router.post('/add-user', (req, res, next) => {
    users.push(req.body['user-name'])
    res.redirect('/user')
})

module.exports = router
