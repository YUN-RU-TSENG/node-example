const { Sequelize } = require('sequelize')

// 將 sequelize 連結 mysql database
const sequelize = new Sequelize('testtwo', 'root', '', {
    dialect: 'mysql',
    host: 'localhost',
})

module.exports = { sequelize }
