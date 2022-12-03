const { DataTypes } = require('sequelize')

const cart = (sequelize) =>
    sequelize.define('Cart', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        quantity: {
            type: DataTypes.INTEGER,
        },
    })

module.exports = cart
