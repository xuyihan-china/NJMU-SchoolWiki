let newNums = nums.filter(function(n){
    return n
})
当返回为true时,函数内部会自动将这次回调函数n加入新的数组中
当返回位false时，函数内部会过滤掉这次的n
返回一个新的数组 你只要接受这个数组就可以了
let newNums = nums.filter(function(n){
    return n<100(这是条件)
})

把数组里所有的数字都乘上2
   map 就是乘除法操作
newNums.map(function(n){
    return n*2
})

reduce 语法
    reduce 就是对数组中所有的内容进行汇总
    prevalue 就是上一次返回的值
    new2Nums.reduce(function(prevalue,n){
        return 100
    },0)
    初始化值0 遍历数组的个数的次数 
    第一次 prevalue 就是 0 因为初始值就是0 n=20
    第二次 prevalue 100 n=40
    第三次 prevalue 100 n=60
    第四次 prevalue 100 n=80
    let total =new2Nums.reduce(function(prevalue,n){
        return prevalue+n
    },0)
    let total = nums.filter(function(n){
        return n<100
    }).map(function(n){
        return n*2
    }).reduce(function(prevalue,n){
        return prevalue+n
    },0) //prevalue 之前是0 
    函数式编程