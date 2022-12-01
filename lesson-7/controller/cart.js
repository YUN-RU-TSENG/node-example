const Cart = require('../model/cart')

function getCart(request, response, next) {
    Cart.getProducts((error, data) => {
        if (error) response.send('取得購物車資料意外出錯，請回到首頁')
        response.render('cart', { title: 'cart', carts: data })
    })
}

function deleteProductOfCart(request, response, next) {
    Cart.deleteProduct(Number(request.body.id), (error) => {
        if (error) response.send('刪除購物車資料失敗')

        Cart.getProducts((error, data) => {
            if (error) response.send('取得購物車資料意外出錯，請回到首頁')
            response.redirect('/cart')
        })
    })
}

module.exports = { getCart, deleteProductOfCart }
