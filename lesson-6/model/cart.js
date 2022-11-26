const fs = require('fs')
const path = require('path')

const cartPath = path.join(path.dirname(process.mainModule.filename), 'db', 'cart.json')

class Cart {
    static getProducts(callback) {
        // 讀取檔案
        // 讀取完執行的 callback，並傳入讀取結果
        fs.readFile(cartPath, (error, data) => {
            if (error) return callback(error, [])
            // 返回 data
            callback(undefined, JSON.parse(data))
        })
    }

    static addProduct(productId, callback) {
        // 讀取檔案
        // 讀取完新增檔案內容
        // 新增完執行 callback
        fs.readFile(cartPath, (error, data) => {
            if (error) {
                const currentCart = [{ id: productId, quantity: 1 }]

                return fs.writeFile(cartPath, JSON.stringify(currentCart), (error) => {
                    if (error) return callback(error)

                    callback(undefined, product)
                })
            }

            const newCartData = JSON.parse(data)
            const productIndex = newCartData.findIndex((element) => element.id === productId)

            if (productIndex === -1) {
                const product = { id: productId, quantity: 1 }
                newCartData.push({ id: productId, quantity: 1 })

                return fs.writeFile(cartPath, JSON.stringify(newCartData), (error) => {
                    if (error) return callback(error)

                    callback(undefined, product)
                })
            }
            const product = newCartData.find((element) => element.id === productId)

            newCartData.splice(productIndex, 1, {
                ...product,
                quantity: product.quantity + 1,
            })

            return fs.writeFile(cartPath, JSON.stringify(newCartData), (error) => {
                if (error) return callback(error)

                callback(undefined, product)
            })
        })
    }

    static deleteProduct(productId, callback) {
        // 刪除檔案
        // 刪除完執行 callback
        fs.readFile(cartPath, (error, data) => {
            if (error) return callback(error)

            const newCartData = JSON.parse(data)

            const productIndex = newCartData.findIndex((element) => element.id === productId)
            const product = newCartData.find((element) => element.id === productId)

            if (product.quantity > 1) {
                newCartData.splice(productIndex, 1, {
                    ...product,
                    quantity: product.quantity - 1,
                })
            } else {
                newCartData.splice(productIndex, 1)
            }

            return fs.writeFile(cartPath, JSON.stringify(newCartData), (error) => {
                if (error) return callback(error)

                callback(undefined, productId)
            })
        })
    }
}

module.exports = Cart
