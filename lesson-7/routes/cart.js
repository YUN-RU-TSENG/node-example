const express = require('express')
const cartController = require('../controller/cart.js')

const router = express.Router()

router.get('/cart', cartController.getCart)

router.post('/delete-product-of-cart', cartController.deleteProductOfCart)

module.exports = router
