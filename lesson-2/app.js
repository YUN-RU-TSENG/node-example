const http = require('http') // cjs
const fs = require('fs') // cjs

// 啟動 server，如果接受到 request 執行此函式，事件驅動
const server = http.createServer(requestListener)
server.listen('3000') // 默認若無填入，會任意分配 port，可以使用 server.address().port 查看

function requestListener(request, response) {
    if (request.url == '/') {
        response.write(`
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Hello World</title>
        </head>
        <body>
        <form action="/message" method="POST">
            <label for="message">message: <input type="text" name="message" id="message" /></label>
            <button type="submit">Submit</button>
        </form>
        </body>
        </html>
    `)
        return response.end()
    }

    if (request.url == '/message' && request.method == 'POST') {
        const body = []

        request.on('data', (chunk) => {
            body.push(chunk)
        })

        return request.on('end', () => {
            const parseBody = Buffer.concat(body).toString()
            const message = parseBody.split('=')[1]
            fs.writeFile('message.text', message, (err) => {
                if (err) {
                    // 錯誤處理
                } else {
                    response.statusCode = 302
                    response.setHeader('Location', '/')
                    response.end()
                }
            })
        })
    }

    response.setHeader('Content-type', 'text/html')
    response.write(`
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Hello World</title>
        </head>
        <body>
            <h1>404</h1>
        </body>
        </html>
    `)
    response.end()
}
