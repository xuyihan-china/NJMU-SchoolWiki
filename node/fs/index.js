var fs = require('fs');
//node 默认异步操作
var fd = fs.openSync('hello.txt','r');
// path way  callback
var buf = Buffer.alloc(20);
console.log(fd);
var content = fs.readFileSync('hello.txt',{flag:'r',encoding:"utf-8"});
//buffer 内存中的缓冲区
//连续的区域 固定的大小
console.log(content);