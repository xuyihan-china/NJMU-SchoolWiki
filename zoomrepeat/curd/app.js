var express = require('express');
var router = require('./router');
var bodyParser = require('body-parser')
//var fs = require('fs');
var app = express();
app.use('/node_modules/',express.static('./node_modules/'));
app.use('/public/',express.static('./public/'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.engine('html',require('express-art-template'));
app.use(router);
app.listen(3000,function(req,res){
    console.log('sever is running at 3000');
})