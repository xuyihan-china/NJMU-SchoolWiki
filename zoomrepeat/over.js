var http = require('http');
var server = http.createServer();
server.on('request',function(request,response){//一定是request response 
    console.log('服务器打开了');
    response.setHeader('Content-Type','text/plain;charset=utf-8');
    response.end("在页面中写入内容");
})
server.listen(3001,function(){
    console.log("server is running");
})//JSON.stringfy