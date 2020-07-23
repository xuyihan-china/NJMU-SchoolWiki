/*
 * @Author: your name
 * @Date: 2020-07-21 14:24:17
 * @LastEditTime: 2020-07-21 14:46:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \.vscode\测试代码\this.js
 */ 
// function foo(num){
//     console.log("foo:"+num);
//     this.count++;
//     console.log(typeof this.count);
//     console.log(this.count)
// }
// foo.count=0;//上面的this.count 不指向 那个函数对象
// foo(2)
function foo(){
    var a =2;
    this.bar();
}
function bar(){
    console.log(this.a)
}
foo()