const fs = require('fs')
const path = require('path')
const getRandomNumber = require('../utils/getRandomNumber')

const productPath = path.join(path.dirname(process.mainModule.filename), 'db', 'product.json')

class Product {
    id = getRandomNumber()

    constructor({ name, image }) {
        this.name = name
        this.image = image
    }

    static addProduct(product, callback) {
        // 先讀取原先檔案，再根據是否有檔案內容決定新增的資料
        fs.readFile(productPath, { encoding: 'utf8' }, (error, data) => {
            // 當前沒有檔案內容，直接新增
            if (error) {
                return fs.writeFile(productPath, JSON.stringify([product]), (error) => {
                    if (error) return callback(error)
                    callback(undefined, product)
                })
            }

            // 當前有檔案內容，修改 data 後重設檔案
            let productData = [...JSON.parse(data), product]
            fs.writeFile(productPath, JSON.stringify(productData), (error) => {
                if (error) return callback(error)
                callback(undefined, product)
            })
        })
    }

    static getProduct(productId, callback) {
        // 讀取 product 檔案
        fs.readFile(productPath, { encoding: 'utf8' }, (error, data) => {
            if (error) return callback(error)
            // 確認 data 有該 id 產品
            const product = JSON.parse(data).find((element) => element.id === productId)
            // 返回產品
            callback(undefined, product)
        })
    }

    static getProducts(callback) {
        // 讀取 product 檔案
        fs.readFile(productPath, (error, data) => {
            if (error) return callback(error, [])
            // 返回 data
            callback(undefined, JSON.parse(data))
        })
    }

    static updateProduct(productId, product, callback) {
        // 讀取 product 檔案
        fs.readFile(productPath, { encoding: 'utf8' }, (error, data) => {
            if (error) return callback(error)

            const newProductData = JSON.parse(data)
            // 確認 data 有該 id 產品
            const productIndex = newProductData.findIndex((element) => element.id === productId)

            if (productIndex === -1) callback(`There is no product of this ${productId}`)

            // 將 data 中的該產品取出，並插入更新後的 Product
            newProductData.splice(productIndex, 1, product)
            fs.writeFile(productPath, JSON.stringify(newProductData), (error) => {
                if (error) return callback(error)

                callback(undefined, product)
            })
        })
    }

    static deleteProduct(productId, callback) {
        // 讀取 product 檔案
        fs.readFile(productPath, { encoding: 'utf8' }, (error, data) => {
            if (error) return callback(error)

            const newProductData = JSON.parse(data)

            const productIndex = newProductData.findIndex((element) => {
                return element.id === productId
            })

            // 確認 data 有該 id 產品
            if (productIndex === -1) return callback(`There is no product of this ${productId}`)

            // 將 data 中的該產品刪除
            newProductData.splice(productIndex, 1)

            fs.writeFile(productPath, JSON.stringify(newProductData), (error) => {
                if (error) return callback(error)

                callback(undefined, productIndex)
            })
        })
    }
}

module.exports = Product
