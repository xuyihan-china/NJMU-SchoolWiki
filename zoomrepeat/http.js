var http = require('http');
//用http.creatSever 方法创建一个web服务器
var server = http.createServer();
//服务器用来提供对数据的服务
//发情求 接受请求 处理请求 给个反馈 发送响应
server.on('request',function(request,response){
    //注册request请求事件 客户端请求过来 就会自动触发服务器request请求时间 第二个参数 ：回调处理
    //Request 请求对象  获取客户端的一些请求消息
    //Response 响应对象 发送响应消息
    console.log("收到请求"+request.url);
    response.setHeader('Content-Type','text/plain;charset=utf-8');
    response.write('hrl睡觉');
    response.end();//反馈结束
    //由于服务器还非常弱 无论是什么请求只可以响应 hello nodejs URL 统一资源定位符 
    //根据不同地址 响应不同内容
});
//绑定端口号 启动服务器
//发送 request 请求 执行第二个参数
server.listen(3000,function(){
    console.log("服务器启动成功了 http://127.0.0.1:3000/ 来访问");
});//ctrl c close 
{{each array}}
。。。。。
{{each}}