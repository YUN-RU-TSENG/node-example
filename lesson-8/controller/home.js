const { Product } = require('../model/index')
const { Cart } = require('../model/index')

async function getHome(req, res, next) {
    const products = await Product.findAll()
    res.render('home', { products })
}

async function addCart(req, res, next) {
    try {
        const product = await Cart.findOne({ where: { ProductId: req.body.id } })
        // 當已有該品項，品項加一
        if (product) {
            await Cart.update(
                { quantity: product.quantity + 1 },
                {
                    where: {
                        ProductId: req.body.id,
                    },
                }
            )
        } else {
            // 沒有時新增品項，新增品項
            await Cart.create({ quantity: 1, ProductId: req.body.id })
        }

        res.redirect('/')
    } catch (error) {
        console.log(error)
    }
}

module.exports = { getHome, addCart }
