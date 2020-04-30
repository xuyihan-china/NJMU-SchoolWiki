// let fs = require('fs');
// fs.readdir('../node',function(err,files){
//     //回调错误 和 读取到的文件
//     console.log(files);
// })
let fs =require('fs');
fs.readdir('../image',function(err,files){
    console.log(files);
})