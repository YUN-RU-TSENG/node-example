const Product = require('../model/product')

function getAdmin(request, response, next) {
    Product.getProducts((error, data) => {
        response.render('admin/home', { products: data })
    })
}

function getAdminProduct(request, response, next) {
    if (request.query.id)
        return response.render('admin/product', {
            isEdit: !!request.query.id,
            id: request.query.id,
        })
    response.render('admin/product', { isEdit: !!request.query.id, id: request.query.id })
}

function addAdminProduct(request, response, next) {
    const newProduct = new Product(request.body)
    Product.addProduct(newProduct, (error, data) => {
        if (error) return response.send('新增商品失敗！')
        response.redirect('/admin')
    })
}

function updateAdminProduct(request, response, next) {
    const editProduct = new Product({ name: request.body.name, image: request.body.image })
    Product.updateProduct(Number(request.body.id), editProduct, (error, data) => {
        if (error) return response.send('修改商品失敗！')
        response.redirect('/admin')
    })
}

function deleteAdminProduct(request, response, next) {
    Product.deleteProduct(Number(request.body.id), (error, index) => {
        if (error) return response.send('刪除商品失敗！')
        response.redirect('/admin')
    })
}

module.exports = {
    getAdmin,
    getAdminProduct,
    addAdminProduct,
    updateAdminProduct,
    deleteAdminProduct,
}
