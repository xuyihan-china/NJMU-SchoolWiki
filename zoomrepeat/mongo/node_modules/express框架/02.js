var express = require('express');
var app = express();
//server http 
//app.use('/public/',express('./public')); 当路径为/public/ 的时候去文件中找./public 资源
app.get('/',function(req,res){//这里get是映射关系 是具体的一个表 router
    /* web中的不叫路径而是叫统一资源定位符url */
    /* 前面可以是/a/b/c 这些是标识符 但是 后面express是你当前文件的路径 不是输入的路径 */
    res.send('express 写的东西');
    res.send(`
    `)
    res.write('原来的api');
    res.end();
})
app.listen(3000,function(){
    console.log('app is running at port xxx')
})