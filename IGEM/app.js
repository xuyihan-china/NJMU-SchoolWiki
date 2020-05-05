var express = require('express');
var fs = require('fs');
var app = express();
app.use('/node_modules/',express.static('./node_modules/'));
app.use('/public/',express.static('./public/'));
app.use('/views/',express.static('./views/'));
app.get('/',function(req,res){
    fs.readFile('./views/index.html',function(err,data){
        if(!err){
            res.send(data);
        }
    })
})
app.listen(3000,function(req,res){
    console.log('sever is running at 3000');
})