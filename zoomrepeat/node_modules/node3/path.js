let path = require('path');
let fs = require('fs');
//console.log(path)
let strPath = 'https://blog.csdn.net/github_38140984/article/details/83006097.jpg';
//获取路径信息扩展名
let info =path.extname(strPath);//获取内容 就是获取句号以后的名字
console.log(info);
 let arr =['/sxt','qianduan','xuyihan'];
 let info1 = path.resolve(...arr);//结构数组 resolve来拼接数组
 console.log(info1);
 //获取当前执行目录的完整路径
 
 let info2 = path.join(__dirname,'/sxt','qianduan','xuyihan');
 console.log(info2);
 let str='https://blog.csdn.net/github_38140984/article/details/83006097.jpg'
 let arrParse =str.split('/');
 arr = arrParse.slice(arrParse.length-2,arrParse.length);
 console.log(arr);
let  filePath =path.join(__dirname,...arr);
console.log(filePath);
 fs.readFile(filePath,function(data,err){
     if(!err){
         console.log(data);
     }
 })