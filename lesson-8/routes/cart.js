const express = require('express')
const cartController = require('../controller/cart')
const router = express.Router()

router.get('/', cartController.getCart)
router.post('/delete-cart', cartController.deleteCart)

module.exports = router
