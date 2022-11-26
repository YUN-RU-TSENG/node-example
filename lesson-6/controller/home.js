const Product = require('../model/product')
const Cart = require('../model/cart')

function getHome(request, response, next) {
    Product.getProducts((error, data) => {
        response.render('home', { title: 'home', products: data })
    })
}

function addProductOfCart(request, response, next) {
    Cart.addProduct(Number(request.body.id), (error, data) => {
        if (error) return response.send('新增商品至購物車失敗！')
        response.redirect('/')
    })
}

module.exports = { getHome, addProductOfCart }
