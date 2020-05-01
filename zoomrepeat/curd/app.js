var express = require('express');
var fs = require('fs');
var app = express();
app.use('/node_modules/',express.static('./node_modules/'));
app.use('/public/',express.static('./public/'));
app.engine('html',require('express-art-template'));
app.get('/',function(req,res){
    fs.readFile('./db.json','utf-8',function(err,data){
        if(err) {
            return res.status(500).send('server error');
        }
        res.render('index.html',{
            fruits:[
                'apple',
                'banana',
                'orange'
            ],
            students:JSON.parse(data).students
        });
    })
   
})
app.listen(3000,function(req,res){
    console.log('sever is running at 3000');
})