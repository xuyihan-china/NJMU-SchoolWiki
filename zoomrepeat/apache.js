var http = require('http');
var server  = http.createServer();
server.on('request',function(req,res){
    var url = req.url;
    if(url ==='/'){
        res.end('hello world');
    }else{
        res.end('404 not found');
    }
})
server.listen(3000,function(){
    console.log('server is running');
})