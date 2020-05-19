const path = require('path')
module.exports={
    entry:'./src/main.js',
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'bundle.js',
        publicPath:'dist/'
        /* 映射webpack和npm run build 一步打包 */
        /* 所有的图片前面加上dist路j 前面写图片不要加上 */
        /*  */
    },
    /* 第一步安装 cnpm install --save-dev css-loader*/
    /* 第二部安装 cnpm install style-loader@0.23.1 --save-dev*/
    module:{
        rules:[
            {
                test: /\.css$/,
                /* 这个的意思是 以css开头 css结尾 */
                //css loader只负责css文件经行加载 不进行解析
                use:['style-loader','css-loader']
                /* 使用多个loader是从右边向左边的 */
            } ,
            {
                test: /\.less$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "less-loader" // compiles Less to CSS
                }
                ]
            }
        ]
    }
    /*大于8kb用base64。小于用file loader */

        
