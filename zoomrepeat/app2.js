//app application 应用程序
var http = require('http');
var fs =  require('fs');
//如果有外链标签 浏览器会对这些资源请求 link script img 
//为了统一处理静态资源 要把所有的静态资源都放到public目录中
http
    .createServer(function(req,res){
        var url = req.url;
        res.end('hello');
        //在服务器端的回应 res.end
        if(url ==='/'){
            fs.readFile('./views/index.html',function(err,data){
                if(err){
                    return res.end('404 not found');
                }
                res.end(data);
            })
        } else if (url.indexOf('/public/') === 0){//返回字符串首次出现的位置
            console.log(url);
            fs.readFile('.'+url,function(err,data){
                if(err){
                    return res.end('404');
                }
                res.end(data)
            });
        }
    })
    .listen(3000,function(){
        console.log('running');
    })
//简单的写法不要加上分号