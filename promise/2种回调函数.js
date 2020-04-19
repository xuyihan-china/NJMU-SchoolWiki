/* 两种类型的回调函数 */
/* 同步回调函数 异步回调函数 */
 const arr= [1,2,3];
 arr.forEach(item =>{
     console.log(item);
 })
 console.log('houmian');
 /* 异步回调函数 */
 /* settimeout 异步回调 会放入队列异步执行 上来就要执行 色图timeout是放到宏队列*/
 