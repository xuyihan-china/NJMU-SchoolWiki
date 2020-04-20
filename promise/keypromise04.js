/* promise 如何串联多个操作任务 
        promise的then 返回一个新的promise 可以开城then的链式调用
        通过then的链式调用 可以串联多个同步异步任务
*/
new Promise((resolve,reject)=>{
    setTimeout(() => {
        console.log("执行任务1 异步");
        resolve(1);
    }, 1000);
}).then(
    value=>{
        console.log('执行任务1 同步');
        return 2;
    },
    reason =>{
        
    }
).then(
    value=>{
        return new Promise((resolve,reject)=>{//再链式调用里 要包再promise里
            setTimeout(() => {
                console.log("这是异步任务3");
            }, 1000);
            resolve(3);
        })
    }
).then(
    value=>{
        console.log(value);
    }
)