/*fs.readFile(path,options,callback)
  fs.readFileSync(path,options)
*/
var fs = require("fs");
fs.readFile("hello3.txt",function(err,data){
    if(!err){
        console.log(data.toString());
    }
})