/* 
  通过node来管理文件 把本地文件发送给客户端
  使用文件系统要引入fs模块 不需要下载 直接引入
*/
var fs = require("fs");
/* fs模块 的东西都是同步 异步 同时一对一对存在 */
/* 同步文件带Sync 异步文件 不带Sync 并且含有callback回调函数 */
/* 文件写入 打开文件 向文件写入内容 保存关闭文件 */
/* 写入文件fs.openSync(path,flags) */
     /* 
     flag r 只读
          w 可写的
*/
/* 写入文件
   fs文件的描述符 传递要写入文件的描述符
   fs.writeSync(fd,String,position ,encoding)
   String 要写入的内容   
   position 一般不穿 是起始的位置
   utf-8 是enco顶
*/
var fd =fs.openSync("hello.txt","a");
/*打开文件 返回值 这个方法会返回一个文件描述符作为结果 我们可以通过这个描述符来对文件经行各种操作 */
fs.writeSync(fd,"play games");
/* 保存关闭文件 */
fs.closeSync(fd);
console.log(fd);