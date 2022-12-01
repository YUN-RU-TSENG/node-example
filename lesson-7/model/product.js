// const fs = require('fs')
// const path = require('path')
const getRandomNumber = require('../utils/getRandomNumber')
const db = require('../utils/db')

// const productPath = path.join(path.dirname(process.mainModule.filename), 'db', 'product.json')

class Product {
    id = getRandomNumber()

    constructor({ name, image }) {
        this.name = name
        this.image = image
    }

    static addProduct(product, callback) {
        db.query(
            'INSERT INTO products (name, image) VALUES (?, ?)',
            [product.name, product.image],
            function (error, results, fields) {
                if (error) callback(error)
                callback(undefined, results)
            }
        )
    }

    static getProduct(productId, callback) {
        db.query('SELECT id = ? FROM products ', productId, function (error, results, fields) {
            if (error) callback(error)
            callback(undefined, results)
        })
    }

    static getProducts(callback) {
        db.query('SELECT * FROM products', function (error, results, fields) {
            console.log(error)
            if (error) callback(error)
            console.log(results ?? [])
            callback(undefined, results ?? [])
        })
    }

    static updateProduct(productId, product, callback) {
        db.query(
            'UPDATE products SET name = ?, image = ? WHERE id = ?',
            [product.name, product.image, productId],
            function (error, results, fields) {
                if (error) callback(error)
                callback(undefined, results)
            }
        )
    }

    static deleteProduct(productId, callback) {
        db.query('DELETE FROM products WHERE id= ?', productId, function (error, results, fields) {
            if (error) callback(error)
            callback(undefined, results)
        })
    }
}

module.exports = Product
