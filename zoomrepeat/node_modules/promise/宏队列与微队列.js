/* 函数再栈内存中进行执行
   同种类型的函数 微队列 promise先执行 宏队列 ajax dom 定时器后执行
   就是promise里的then先执行 然后再执行settimeout
   首先执行完队列里的同步代码 然后再执行异步代码 异步代码先执行微队列
   一个一个执行 微队列 的回调 然后经行宏队列 dom-->ajax-->settimeout
   每次准备取出第一个宏任务执行前 都要将微任务一个一个拿出来执行
   同步代码执行就已经把宏队列和微队列拍好了
   那个数已经添加到一个队列里下面统计代码先不看
*/
new Promise ((resolve,reject)=>{
    console.log(2);//这是同步执行代码 因为promise的 executer是同步有执行 then是回调
})