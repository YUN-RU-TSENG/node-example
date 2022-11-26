const pug = require('pug')

const compilerFunction = pug.compileFile('test.pug')

console.log(
    compilerFunction({ content1: 'Hello World', content2: 'test 2', content3: [1, 2, 3, 4, 5] })
)
// console.log(pug.renderFile('test.pug', { content1: 'Hello QQ', content2: 'test 2' }))
