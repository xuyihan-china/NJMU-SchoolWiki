let events = require('events');
let fs = require('fs');
let ee=new events.EventEmitter()//事件对xiang
ee.on("helloSuccess",function(data){
    console.log('吃饭');
    console.log(data.toString());
})
//on 是监听 如果helloScucess成功 则执行function
fs.readFile('hello.txt',function(err,data){
    if(!err){
        console.log(data);
        ee.emit("helloSuccess",data);//emit 触发了那个事件 这是触发事件
    }
})