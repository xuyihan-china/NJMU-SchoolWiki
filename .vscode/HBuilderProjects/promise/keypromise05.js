new Promise((resolve,reject)=>{
    resolve(1);
}).then(
    value=>{
        return 2;
    },
    reason => {throw reason}//向外界抛出一个reason 相当于return中的一种情况 throw 数字
).then(
    value=>{
        return 3;
    },
    reason => {throw reason}//要有空格不要当作函数体
).catch(
    reason=>{

    }
)//如果没有写失败的回调 会异常传透 一直到最后的catch
//要么抛异常 要么返回失败的promise 不然就是成功 undefined 执行成功

//2。终端promise链 返回一个空promise return new promise= (()=>{})