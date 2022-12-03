const { Cart, Product } = require('../model/index')

async function getCart(req, res, next) {
    try {
        const carts = await Cart.findAll({ include: Product })
        res.render('cart', { carts: JSON.parse(JSON.stringify(carts, null, 2)) })
    } catch (error) {
        console.log(error)
    }
}

async function deleteCart(req, res, next) {
    try {
        await Cart.destroy({
            where: {
                id: req.body.id,
            },
        })
        res.redirect('/cart')
    } catch (error) {
        console.log(error)
    }
}

module.exports = { deleteCart, getCart }
