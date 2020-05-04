// var fs =  require('fs')
// fs.open('hello.txt',"w",function(err,fd){
//     if(!err){
//         fs.write(fd ,"成功",function(err){
//             if(!err){
//                 console.log("resolve");
//                 fs.close(fd,function(){
//                 });
//             };
           
//         })
//     }
    
// });
var fs =require('fs');
fs.open('hello.txt',"w",function(err,fd){//错就错在“w”不需要flags 用到的callback每个函数都用到
    if(!err){
        fs.write(fd,"第二次成功写入了@--@",function(){
            if(!err){
                console.log("快去查看");
                fs.close(fd ,function(){
                })
            }
        });
    }
})