var http =require('http');//这个文件是获取html页面
var fs = require('fs');
var server = http.createServer();
server.on('request',function(req,res){
    var url = req.url;
    if (url ==='/'){
        fs.readFile('./resource/index.html',function(err,data){
            if(err){
                res.setHeader('Content-Type','text/plain;charset= utf-8');
                res.end("文件读取失败，稍后再试");
            }else{
                res.end(data)
            }
        })
        //Content type 来告知浏览器数据内容是什么类型
    }else if(url === '/ab2.jpg'){//这个不是文件路径 这个是标识 可以改为任意字符
        fs.readFile('./resource/ab2.jpg',function(err,data){
            if(err){
                res.setHeader('Content-Type','image/jpeg;charset= utf-8');//图片不要编码
                res.end("文件读取失败，稍后再试");
            }else{
                res.end(data);
            }
        })
    }
});
server.listen(3000,function(){
    console.log('Server is running');
})