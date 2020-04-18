 let fs = require('fs');
 fs.writeFile('text2.txt',"吃你妈逼\n",{flag:'a',encoding:"utf-8"},function(err){
     if(!err){
         console.log("写入成功");
     }else{
         console.log("写入失败");
    }
 })