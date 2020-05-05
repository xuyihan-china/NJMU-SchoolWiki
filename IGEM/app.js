var express = require('express');
var router = require('./router');
var app = express();
app.use('/node_modules/',express.static('./node_modules/'));
app.use('/public/',express.static('./public/'));
//app.use('/views/',express.static('./views/')); static server 静态资源服务 
//网页如果去除/public 就不可以通过 /public方式访问 而是直接访问
app.engine('html',require('express-art-template'));
app.use(router);
app.listen(3000,function(req,res){
    console.log('sever is running at 3000');
})