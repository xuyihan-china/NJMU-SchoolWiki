/* 流式文件写入 */
/* 同步 异步 简单文件 不适合大文件 性能差 会内存溢出*/
var fs = require('fs');
/* fs.createReadStream(); */
//用来创建一个可写流 path文件路径 option配置参数
var ws = fs.createWriteStream("hello3.txt")/* pipe   */
ws.once("open",function(){
    console.log("打开了");
})
ws.once("close",function(){
    console.log("关闭了");
})
ws.write("xuuxuu");
ws.write("yiyiyi");
/* 关闭文件可以用open和close来绑定事件 */
ws.end();

/* on 事件字符串 回调函数 可以为对象绑定一个字符串 */
/* once 事件字符串 可以为对象绑定一个一次性事件 触发一次以后失效 */

var fs = require('fs');
var ws = fs.createWriteStream('hel');
ws.once('open',function(){

})
ws.once('close',function(){

})
ws.write('wo n b');
ws.end();//标识结束流文件