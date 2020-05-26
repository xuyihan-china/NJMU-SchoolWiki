/* message:
       referenceError 引用的变量不存在
       TypeError  类型错误
       syntaxError 语法错误  外面里面都用双引号
       RangeError 数组值不在范围内 递归调用自己 而自己的递归函数没有加限制条件
*/
/* 
  捕获与抛出 捕获错误
  捕获 try catch
  抛出错误 throw error throw new Error() 来执行 自己看怎么样来显示响应内容
*/
// try{
//     let d;
//     console.log(d.xxx);
// }catch(error){
//    console.log(error.message);//可以选择看stack 或者 message
// }
//console.log('下面还可以执行');
// function something(){
//     if(Date.now()%2===1){
//         console.log('奇数');
//     }else{
//         throw new Error('这是自己可以定义显示的error内容');
//     }
// }
// try{
//     something();
// }catch(error){
//    console.log(error.message);
// }
function something(){
    if(Date.now()%2===1){
        console.log('奇数');
    }else{
        throw new Error('@?@');
    }
}
try{
    something()
}catch(error){
    console.log(error.message);
}