var express = require('express');
var app = express();
app.get('/',function(req,res){
    res.send('....');
})
app.get('/router',function(req,res){
    res.send('.....');
})
app.get('/ls',function(req,res){
    res.write('///');
    res.end();
})
app.get(/.ba$/)
app.listen(8080);
