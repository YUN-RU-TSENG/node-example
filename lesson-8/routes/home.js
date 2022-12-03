const express = require('express')
const homeController = require('../controller/home')
const router = express.Router()

router.get('/', homeController.getHome)
router.post('/add-cart', homeController.addCart)

module.exports = router
