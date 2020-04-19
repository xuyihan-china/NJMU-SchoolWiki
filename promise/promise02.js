/*
    区分实例对象和函数对象 
    函数对象是定义在函数身上Promise.all() 对象身上才有方法
    实例对象的方法是定义在原型身上Promise.prototype.then() 这里讲的promise是实例对象
    因为前面没有new一个promise
    Promise.resolve 返回的是实例对象
*/
//执行器函数 执行异步任务 执行器就是传递成功或者失败的标识
/* new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('sucess');
        reject('fail');
    },1000)
}).then(
    value=>{
        console.log('onresolved1'+value);
    }
).catch(
    reason=>{
        console.log('on rejected'+reason);
        
    }
) */
//产生成功值为1的promise对象
// const p1=new Promise((resolve,reject) =>{
//     resolve(1);
// })
// const p2= Promise.resolve(2);//语法糖
// const p3 = Promise.reject(3);
// p2.then(value =>{console.log(value);
// })

//promise.all 函数对象的方法
// const pAll = Promise.all([p1,p2]);//成功返回数组
// pAll.then(
//     value=>{
//         console.log(value);
//     },
//     reason =>{
//         console.log(reason);//失败返回失败的reject内容
//     }
// )
const pRace = Promise.all([p1,p2]);
pRace.then(
    value=>{
        console.log(value);
    },
    reason =>{
        console.log(reason);//失败返回失败的reject内容
    }//谁先失败返回谁的值 不总是按照失败的返回结果