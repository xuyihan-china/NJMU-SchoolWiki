var fs= require('fs');
var ws = fs.createWriteStream("hell04.txt");
ws.once("open",function(){
    console.log("打开成功！");
});
ws.once("close",function(){
    console.log("打开失败！");
});
ws.write("在我的后园，可以看见墙外有两株树，一株是枣树，还有一株也是枣树。");
ws.end();
