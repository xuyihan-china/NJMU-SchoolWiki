/* 
   promise 是什么 promise 是js中执行异步编程的新解决方案
       语法：
               promise 是一个构造函数 说到构造函数的实例的干事情的
               promise对象用来封装一个异步操作并获取其结果
   为什么要用promise
   如何用promise
*/
/* 
   promise 有三个状态  pending resolved rejected
   刚刚new出来是 pending状态  只可以从 13 12
   resolved 成功 rejected 失败了
   一个promise 只会改变一次状态  每次都会有一个结果数据
   成功数据 value 失败的数据 reason
   then是指定回调函数的
    then指定的可以是成功的函数 可以指定失败的 catch 只可以是失败的
*/
    //创建新promise
    const p =new Promise((resolved ,rejected)=>{//执行器函数 执行异步任务 resolved 和 rejected 是一个函数
        setTimeout(() => {
            const time = Date.now();
            if(time%2==0){
                resolved('成功的数据,time '+time);//用来传递参数
            }else{
                rejected('失败的数据,time '+time);//用来传递参数
            }
        },1000);
    //如果成功了 resolved(value)

    //如果失败了 reject(reason)
})
    p.then(
        value =>{//接受得到的value函数
            console.log('成功回调',value);
        },
        reason =>{//接受得到的reason数据
            console.log('失败回调',reason);
        }
    )
