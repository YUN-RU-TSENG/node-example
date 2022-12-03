const express = require('express')
const adminController = require('../controller/admin')
const router = express.Router()

router.get('/', adminController.getAdmin)

router.get('/edit-product', adminController.getAdminEdit)

router.post('/add-product', adminController.addProduct)

router.post('/delete-product', adminController.deleteProduct)

router.post('/update-product', adminController.updateProduct)

module.exports = router
