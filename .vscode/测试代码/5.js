/*
 * @Author: your name
 * @Date: 2020-07-20 13:19:51
 * @LastEditTime: 2020-07-20 13:58:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \.vscode\测试代码\5.js
 */ 
for(var i=1;i<=5;i++){
    (function(){
        var j = i
        setTimeout(() => {
          console.log(j)  
        }, j*1000);
    })()
}
   