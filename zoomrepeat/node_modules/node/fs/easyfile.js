

/* 简单文件写入  */
var fs = require('fs');
fs.writeFile("hello3.txt","xxuyihan",{flag:"a"},function(err){
    console.log("cheng gong");
})/* a是追加 */
/* 
{flag a
w r
}


\\转义这是
/ 路径
*/