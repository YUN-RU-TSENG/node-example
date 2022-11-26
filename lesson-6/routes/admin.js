const express = require('express')
const router = express.Router()
const adminController = require('../controller/admin')

router.get('/', adminController.getAdmin)

router.get('/product', adminController.getAdminProduct)

router.post('/add-product', adminController.addAdminProduct)

router.post('/update-product', adminController.updateAdminProduct)

router.post('/delete-product', adminController.deleteAdminProduct)

module.exports = router
