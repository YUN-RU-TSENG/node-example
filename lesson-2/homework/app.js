const http = require('http')
const route = require('./route.js')

// 啟動 server 在 3000
const server = http.createServer(route.handleRoute)
server.listen('3000')
