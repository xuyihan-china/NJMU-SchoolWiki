var http = require('http');
var fs = require('fs');
var url = require('url');
var server  = http.createServer();
server.on('request',function(req,res){
    var url =req.url;
    if (url === '/'){
        fs.readFile('./views/index.html',function(err,data){
            if(err){
                return res.end('404 not found');
            }
            res.setHeader('Content-Type','image/png;charset= utf-8');
            res.setHeader('Content-Type','text/html;charset= utf-8');
            res.end(data.toString());
        })
    }
    
})
server.listen(3000,function(){
    console.log('server is running at 3000');
})