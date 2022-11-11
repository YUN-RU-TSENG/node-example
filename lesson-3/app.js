const http = require('http')

const server = http.createServer((req, res) => {
    res.setHeader('Content-type', 'text/html')
    res.write(`
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
        </head>
        <body>
            Hello World!
        </body>
    </html>
    `)
    res.end()
})

server.listen('3000')
