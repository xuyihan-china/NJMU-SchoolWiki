async function fn1(){
    throw 3;
}
//async 函数的返回值是一个promise对象 
//而最后的返回结果有函数的执行结果来决定
const result = fn1();
result.then(
    value=>{

    },
    reason =>{
        console.log(reason);
    }
)
//await 表达式  函数头部加上async即使返回值不是一个promise 的到的结果也是promise对象
//前面加上await得到返回值 fn1 return 1 fn1()是promise 加上await得到的值是1
//await 表达式右侧一般是promise对象 await返回的是promise成功的值
//如果表达式是其他值，直接将这个值作为await的返回值
function fun2(){
    return Promise.resolve(2);
}
function fun2(){

}
async function fn3(){//await 必须要加上async
    const promise =await fn2();//等待这个promise有了结果 然后再返回promise 成功的值
    const promise2 = await fn3();//得到结果就是普通函数的执行结果
    console.log('value',value);
}
//如果要用await就收错误的promise对象
async function fn4(){
    try{
        const promise3 = await fn3();
    }catch(err){
        console.log(err); //这里捕获的是 rejected的值 
    }
}
/* 
  async函数返回的是一个promise对象
  async函数返回的promise结果由函数执行结果来决定
  await 右侧一般是promise对象 也可以是其他值
  如果表达式是promise对象 加上await返回成功的值
  如果是其他值 则返回函数的值 要看失败返回值 用try catch
*/
