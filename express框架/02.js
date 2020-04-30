var express = require('express');
var app = express();
//server http 
app.use('/public/',express('./public'));
app.get('/',function(req,res){
    res.send('express 写的东西');
})
app.listen(3000,function(){
    console.log('app is running at port xxx')
})