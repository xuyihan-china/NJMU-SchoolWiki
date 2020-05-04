 let fs = require('fs');
//  fs.writeFile('text2.txt',"吃你妈逼\n",{flag:'a',encoding:"utf-8"},function(err){
//      if(!err){
//          console.log("写入成功");
//      }else{
//          console.log("写入失败");
//     }
//  })
 function writefs(path ,content){
     return new Promise(function(resolve ,reject){
        fs.writeFile(path,content,{flag:'a',encoding:"utf-8"},function(err){
            if(!err){
                //console.log("写入成功");
                resolve(err);
            }else{
                //console.log("写入失败");
                reject(err);
           }
        })
     })
 }
 async function writeList(){
     //异步的function函数
      await writefs('text2.txt',"今天吃什么\n");
      await writefs('text2.txt',"吃屎\n");
 }
 writeList();