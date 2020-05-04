/* 多次文件读取  */
var fs = require("fs");
var rs = fs.createReadStream("可读流数据");
var ws = fs.createWriteStream("接受的数据");
rs.pipe(ws);//可读流输出到可写流中