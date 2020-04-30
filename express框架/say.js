var express = require('express');
var app = express();
app.use('/public/',express.static('./public/'))
app.engine('html',require('express-art-template'));
//第一个参数 表示当渲染以.art结尾的文件的时候，使用art-template 模板引擎
//express-art-template 是专门用来在express中把art-template整合到express中 
//虽然外面不要记载 'express-art-template依赖art-template
//res.render('html模板的名称'，‘模板字符串’) 就是替换字符串
//所有文件存放在 views视图中
//如果要修改views路径 app.set('views',render函数默认路径)
app.get('',function(res,req){
    res.render('404.html',{
        title:'admin system'
        })
    res.send('/page')
})
app.get('/post',function(res,req){
    res.send('post page')
})
app.listen('3000',function(){
    console.log('running');
})