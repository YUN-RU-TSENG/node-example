// 返回 / 和 /user dummy html
// 針對 / 上的 form，處理 /create-user 以及打印結果
const users = ['Amy', 'Tom', 'John']

function handleRoute(request, response) {
    const requestUrl = request.url
    if (requestUrl === '/') {
        response.setHeader('Content-type', 'text/html')
        response.write(`
        <html lang="en">
            <head>
                <meta charset="UTF-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>homework</title>
            </head>
            <body>
                <h1>Path: /</h1>
                <a href="http://localhost:3000/users">返回 users</a>
                <form action="/create-user" method="POST">
                    <label for="user">
                        user
                        <input type="text" name="user" required />
                        <button>create user</button>
                    </label>
                </form>
                <p>當前用戶名單共有 ${users.length} 位</p>
            </body>
        </html>
        `)
        return response.end()
    }

    if (requestUrl === '/users') {
        response.setHeader('Content-type', 'text/html')
        response.write(`
        <html lang="en">
            <head>
                <meta charset="UTF-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Document</title>
            </head>
            <body>
                <h1>Path: /users</h1>
                <a href="http://localhost:3000/">返回 home</a>
                <ul>
                    ${users.map((item) => ` <li>${item}</li>`).join('')}
                </ul>
                <p>當前用戶名單共有${users.length}位</p>
            </body>
        </html>
        `)
        return response.end()
    }

    if (requestUrl === '/create-user' && request.method === 'POST') {
        // 新增用戶
        const currentUser = []

        request.on('data', (chunk) => {
            currentUser.push(chunk)
        })

        return request.on('end', () => {
            const parseUserResult = Buffer.concat(currentUser).toString()
            const userResult = parseUserResult.split('=')[1]
            users.push(userResult)
            response.statusCode = 302
            response.setHeader('Location', '/')
            response.end()
        })
    }

    response.setHeader('Content-type', 'text/html')
    response.write(`
        <html lang="en">
            <head>
                <meta charset="UTF-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>homework</title>
            </head>
            <body>
                <h1>Path: ${requestUrl}</h1>
                <a href="http://localhost:3000">返回 home</a>
                <a href="http://localhost:3000/users">返回 users</a>
                <p>QQ 找不到 ${requestUrl} 頁面 404</p>
            </body>
        </html>
        `)

    return response.end()
}

module.exports.handleRoute = handleRoute
