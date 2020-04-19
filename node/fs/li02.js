var fs = require('fs');
var ws = fs.createWriteStream("hello66.txt");
ws.once("open",function(){
    console.log("打开成功");
})
ws.once("close",function(){
    console.log("打开失败");
})
ws.write("枣树被砍了@@");
ws.end();