/* 
   问题：回调函数和状态谁先改变
   正常逻辑是先指定回调函数先  就是先 执行 value reason 箭头函数
   回调出上面的resolve和reject 启动成功或失败之后再改变状态
*/
//这是常规用法 先指定回调函数（前面的 操作是异步的 所以直接到了then 指定回调函数）
//为什么先指定了回调 因为promise就是来解决JavaScript中的异步操作问题
//2.谁来回调 是then 来回调 resolve和rejected里的东西
new Promise = ((resolve,reject)=>{
    setTimeout(() => {
        resolve(1);//异步执行回调函数 这里的内容叫回调函数
    }, 1000);
}).then(//先制定了回调函数 然后再改变了状态 （这里的情况）
        //先指定回调函数，保存当前执行的回调函数
    value=>{

    },
    reason=>{
        console.log(reason);
    }
)
/* .then 是同步调用 异步执行回调函数 */

//先改了数据
new Promise = ((resolve,reject)=>{
        resolve(1);//先改变了状态 同时指定数据
}).then(//后指定回调函数  就是当调用then 的时候已经有结果了
    value=>{

    },
    reason=>{
        console.log(reason);
    }
)
/* 总结 前面异步then先  js先执行完同步代码 然后执行回调代码*/