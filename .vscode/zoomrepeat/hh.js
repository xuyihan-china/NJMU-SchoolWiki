var express = require('express');
var router = require('./router');
var bodyParser = require('body-parser')
var app =express();
app.use('/public/',express.static('./public/'));
app.use('/node_modules/',express.static('./node_modules/'));
app.engine('html',require('express-art-template'))//res.render方法
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json);
app.use(router);
app.listen('3000',function(){
    console.log('server is running at 3000');
})