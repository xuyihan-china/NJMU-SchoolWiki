/* 
    如何改变promise的状态 
    1.resolve(value) 如果是pending就会变为resolved
    2.rejected(reason) 如果是pending 就会变成resolved
*/
const p = new Promise((resolve,reject)=>{
    //resolve(1);//变为resolve的状态
    //reject(2);//变为失败状态 
    throw 3;//还有另外一种状态 抛出异常 promise变为失败状态 reason值就是error
})
p.then(
    value=>{
    },
    reason =>{
        console.log(reason);//返回值就是error值 如果有2个then 依次调用
    }
)