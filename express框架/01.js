var express = require('express');
//创建server http
var app = express();
//公开指定目录(public) 就可以让所有文件访问
app.use('/public/',express.static('./public'));
//相当于http.creatserver
app.get('/',function(req,res){//当服务器收到get请求 执行回调处理函数 这是再写服务器
    res.send('你好我是express');//像浏览器发送的东西 相当于在php中写代码
})
app.listen(3000,function(){
    console.log('app is running at port 3000');
})