/**
 * app.js 入门模块
 * 职责：
 *   创建服务
 * var express = require('express')
 * var app =express()
 * 
 *   做一些服务相关配置
 * var router  =require('./router')
 * app.use('/public/',express.static('./public/'))
 * app.use('/node_modules/',express.static('./node_modules/'))
 *     模板引擎
 * app.engine('html',require('express-art-template'))
 *     body-parser 解析表单 post 请求体
 * app.use(bodyParser.urlencoded({extended:false}))
 * app.use(bodyParser.json())
 *     提供静态资源服务
 *   挂载路由
 *  app.use(router)
 *   监听端口启动服务
 * app.listen('3000',function(){
 *    console.log('server is running')
 * })
 * module.exports = app;
 */

var express = require('express')
var router = require('./router')
var bodyParser = require('body-parser')//这是body parser 专门用于post请求

var app = express()

app.use('/node_modules/', express.static('./node_modules/'))
app.use('/public/', express.static('./public/'))

app.engine('html', require('express-art-template'))

// 配置模板引擎和 body-parser 一定要在 app.use(router) 挂载路由之前
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

// 把路由容器挂载到 app 服务中
app.use(router)

app.listen('3000', function () {
  console.log('running 3000...')
})

module.exports = app
