let readLine = require('readline');
//导入readline包
//实例化接口对象
//创建接口对象
var rl=readLine.createInterface({
    input:process.stdin,
    output:process.stdout
})
//question 方法 设置r1 提问事件
function questions(title){
    return new Promise(function(resolve ,reject){
        rl.question(title,function(answer){
            resolve(answer);
        })
    })
}

rl.on('close',function(){
    process.exit(0);
})