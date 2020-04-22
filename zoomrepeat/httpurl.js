var http = require('http');
var server = http.createServer();
server.on('request',function(request,response){
    console.log("收到请求，路径是"+request.url);
    // response.write("xuyihan server");
    response.end('hello world hello nodejs');
    var url = request.url; //这里的URL都是以/开头的 判断处理响应
    if(url ==='/'){
        response.end('index.page');
    }else if(url === '/loginpage'){
        response.end('login page');
    }else{
        response.end('404 NOT FOUND');
    }//response.end 只可以是二进制数据或者字符串
})
server.listen(3000,function(){
    console.log("服务启动成功");
})