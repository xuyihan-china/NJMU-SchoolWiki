/* 
   promise 是什么 promise 是js中执行异步编程的新解决方案
       语法：
               promise 是一个构造函数 说到构造函数的实例的干事情的
               promise对象用来封装一个异步操作并获取其结果 就是promise只可以从一个吗到一个吗
   为什么要用promise
   如何用promise
*/
/* 
   promise 有三个状态  pending resolved rejected
   刚刚new出来是 pending状态  只可以从 13 12
   resolved 成功 rejected 失败了
   一个promise 只会改变一次状态  每次都会有一个结果数据
   成功数据 value 失败的数据 reason
   then是指定回调函数的 其实就是回调promise里的函数参数
    then指定的可以是成功的函数 可以指定失败的 catch 只可以是失败的
*/



    //创建新promise
    /* const p =new Promise((resolved ,rejected)=>{//执行器函数 执行异步任务 resolved 和 rejected 是一个函数
        setTimeout(() => {
            const time = Date.now();
            if(time%2==0){
                resolved('成功的数据,time '+time);//用来传递参数
            }else{
                rejected('失败的数据,time '+time);//用来传递参数
            }
        },1000); */
    //如果成功了 resolved(value)

    //如果失败了 reject(reason)

    /* p.then(
        value =>{//接受得到的value函数
            console.log('成功回调',value);
        },
        reason =>{//接受得到的reason数据
            console.log('失败回调',reason);
        }
    ) */
const p2 = new Promise((resolved,rejected)=>{//promise 中传递一个箭头函数 里面传递resolved 和rejected
    setTimeout(()=>{
        if(Date.now()%5===0){
            resolved("太巧了");
        }else{
            rejected("这很正常");
        }
    },100);
})
p2.then(
    (value)=>{
      console.log('你成功了'+value);
    },
    reason=>{
        console.log('这很正常@@'+reason);
        
    }
)
const p3= new Promise((resolved,rejected)=>{
    setTimeout(() => {
        let a = Date.now();
        if(a%2==0){
            resolved("偶数");
        }else{
            rejected("奇数")
        }
    }, 1000);
})
p3.then(
    value=>{
        console.log("这是"+value)
    },
    reason=>{
        console.log("这是"+reason)
    }
)