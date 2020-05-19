const path = require('path')
module.exports={
    entry:'./src/main.js',
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'bundle.js',
        /* 映射webpack和npm run build 一步打包 */
    },
}