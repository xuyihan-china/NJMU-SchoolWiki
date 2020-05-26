(function (window){
    function Promise(executor){
    //执行器函数是同步执行的 立即同步执行 执行器函数
    //executor(resolve,reject)
    this.status = 'pending';// 状态
    this.data = 'undefined';//数据
    this.callbacks =[];//回调函数
    function resolve(value){
        //将状态改为resolved
        this.status='resolved';
        //保存value数据
        this.data = value;
        //如果有等待执行的callback函数 则立即异步执行回调函数
        if(this.callbacks.length>0){
            setTimeout(() => {
                this.callbacks.forEach(callbacksObj =>{
                    callbacks.onResolved(value)
                });
            }, );
        }
    }
    function reject(){
         this.status='rejected';
         this.data = value;
         if(this.callbacks.length>0){
             setTimeout(() => {
                 this.callbacks.forEach(callbacksObj =>{
                     callbacks.onRejected(reason)
                 });
             }, );
             
         }
    }
    executor(resolve,reject);
    }
    /* 
    Promise 的原型对象then 指定成功失败的回调函数 返回一个新的promise对象
    */
   Promise.prototype.then = function(onResolved,onRejected){

   }
    /* 
    Promise 的原型对象catch 返回一个新的promise 
    */
   Promise.prototype.catch = function(onRejected){

   }
   /* 
   promise的函数对象的方法 resolve reject 返回一个成功的promise 指定结果的返回
   */
   Promise.resolve = function(value){

   }
   //指定一个失败的promise 
   Promise.reject = function(reason){

   }
   /* promise 的all方法  返回一个promise 只有所有的promise都成功时才成功 */
   Promise.all = function(promises){

   }
   //返回一个promise 其结果由第一个完成的promise来决定
   Promise.race = function(promises){

   }
    //向外暴露promise函数
    window.Promise = Promise;
})()
/* 自定义promise函数模块 IIFE 匿名函数自调用来实现 */