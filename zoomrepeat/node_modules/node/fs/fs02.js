/* 异步文件写入 */
/* fs.open(path,flags.callback) */
var fs = require("fs");
//打开文件
/* fs.open("hello.txt","w",function(err,fd){//打开文件 path 权限 回调
    if(!err){
        fs.write(fd,"xu",function(err){//打开的文件 写入内容 函数
           fs.close(fd,function(){//关闭的文件
           })
        })
    }
});
console.log("这个先执行"); */
// fs.open("hello3.txt",{flag:"w+"},function(err,fd){
//     //fd 是文件描述 err是错误 在open中要写入读写权限
//     if(!err){
//         fs.write(fd,"hello 4.18",function(err){
//             fs.close(fd,function(){  
//             })
//         });
//     }
// })


//异步调用方法都是通过回调函数的参数返回的
//回调函数的两个参数 err 错误对象 没有为null
//fd文件描述
var fs = require('fs');
fs.open('he1642.txt','w',function(err,fd){
    if(!err){
        fs.write(fd,"hello 429",function(err){
            fs.close(fd,function(){
            })
        })
    }
})
//这是2020429 写的 异步文件写入 
//open 里要给出 写的文件 权限 不要写flag 回调函数
//后面要处理错误信息 其实就用到了 open write close
//open err  fd  write fd 写入内容 function