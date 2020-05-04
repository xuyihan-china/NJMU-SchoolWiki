var fs = require('fs');
//简单文件写入 writeFile
fs.writeFile("01.txt","我是许逸涵",{flag:"w"},function(err){
    console.log(err);
});//第二个参数是string或者buffer encoding mode flag