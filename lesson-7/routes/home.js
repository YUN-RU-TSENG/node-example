const express = require('express')
const router = express.Router()
const homeController = require('../controller/home.js')

router.get('/', homeController.getHome)

router.post('/add-product-of-cart', homeController.addProductOfCart)

module.exports = router
