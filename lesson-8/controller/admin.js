const { Product } = require('../model/index')

async function getAdmin(req, res, next) {
    try {
        const products = await Product.findAll()
        res.render('admin', { products })
    } catch (error) {
        console.log(error)
    }
}

async function getAdminEdit(req, res, next) {
    const product = await Product.findOne({ where: { id: req.query.id } })
    res.render('admin-edit', { product: product })
}

async function addProduct(req, res, next) {
    try {
        await Product.create({ name: req.body.name, image: req.body.image })
        res.redirect('/admin')
    } catch (error) {
        console.log(error)
    }
}

async function deleteProduct(req, res, next) {
    try {
        await Product.destroy({
            where: {
                id: req.body.id,
            },
        })
        res.redirect('/admin')
    } catch (error) {
        console.log(error)
    }
}

async function updateProduct(req, res, next) {
    try {
        await Product.update(
            { name: req.body.name, image: req.body.image },
            {
                where: {
                    id: req.body.id,
                },
            }
        )
        res.redirect('/admin')
    } catch (error) {
        console.log(error)
    }
}

module.exports = { getAdmin, addProduct, deleteProduct, getAdminEdit, updateProduct }
