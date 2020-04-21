new Promise =((resolve,reject)=>{
    resolve(1);
}).then(
    value=>{
        console.log(value);
        // return 2; 成功了
        // return Promise.reject(4); 失败了
        // return Promise.resolve(5); 成功了
        //throw 5 失败了
        return Promise.reject(4);
    },
    reason =>{

    }//第一个值是1 promise的 返回值是由then里的回调函数决定 第一个回调函数没有return 所以为undefined
).then(
    value=>{
        console.log(value);
    },
    reason=>{

    }
)//第二个值为undefined 如果要返回值 就在前面的 return 

/* 
    总结
        抛出的是异常那就调用下面的失败
        返回的为非promise的任意值 promise变为resolved value为返回的值
        返回的 是一个新promise 这个promise就是新promise的结果
    简单：
         return 执行返回对象 不然就是undefined
        .then的函数由谁来执行就是看promise的执行结果来看
        .then返回的promise对象由函数的执行结果，return的东西来决定
*/