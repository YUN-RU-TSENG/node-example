const { sequelize } = require('../utils/sequelize')

const Cart = require('./cart')(sequelize)
const Product = require('./product')(sequelize)

// 一對一，Cart 內部的商品 id 與商品 table 連結，需要商品細節可以使用 id 查
Cart.belongsTo(Product)

module.exports = { Cart, Product }
