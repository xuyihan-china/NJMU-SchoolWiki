var http = require('http');
var fs = require('fs');
var url = require('url');
//引入url模块

/* 自定义的字符串写法 */
var comments =[{
  //里面以对象的方式存储
},
{

},
{

}]
//pinglun?name=的撒的撒&message=的撒的撒的撒
var objUrl = url.parse(req.url,true);
// objUrl 是 一个对象 url parse 方法转化为一个对象
var pathName = objUrl.pathname;
//这是pinglun
//第二个方法 是 objUrl.query 
//找到？之后用户写的内容
//url 对象是 让服务器找到地址
//read'file 是让 浏览器找到相对地址
var htmlStr = template.render(data.toString(), {
    comments: comments
  })
  //这个是template 模板渲染 过后的字符串
  //服务端渲染 render (数据，替换的字符串)
  res.statusCode = 302
  res.setHeader('Location', '/')
  res.end()
  //render 的数据要 data.toString()
  //写入内容之后就可以 让服务器重定向 302 跳转页面
  //‘location’ 客户端
  res.end(htmlStr);
  if (pathname.indexOf('/public/') === 0) 
  //pathname indexOf 是返回第一个数组
  //statusCode 
  //