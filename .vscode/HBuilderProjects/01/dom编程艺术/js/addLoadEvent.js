function addLoadEvent(func){
    /* 为了以后把多个函数绑定到window.onload上 */
    var oldonload = window.onload;//将现有的事件处理函数的值存入变量中
    if (typeof window.onload != 'function') {//判断有没有绑定事件函数
        window.onload = func;//如果这个事件处理函数没有绑定任何函数，就把新函数添加给它
    } else {
        window.onload = function() {
            oldonload();
            func();//如果已经绑定了函数，就把新函数追加到现有指令的末尾
      }
    }
}
/* function addLoadEvent(func){
首先创建一个addLoadEvent函数，传入一个参数func，func就是我们想调用函数的
var oldοnlοad=window.onload;
定义一个oldonload变量来存放window.onload，如果window.onload调用过了第一个函数func1，那么就把window.οnlοad=func1()，再把func1()赋给oldonload
if(typeof window.onload!=‘function’){
这一步是判断window.onload是否调用过函数
如果没有调用过，typeof window.οnlοad=null，不相等就返回true，执行window.οnlοad=func;也就是第一次调用你的func1函数，即window.οnlοad=func1;
如果调用过，就返回false，执行匿名函数window.οnlοad=function(){oldonload();func();}
因为window.onload调用过，证明此时window.οnlοad=func1，即oldοnlοad=func1；执行oldonload()相当于执行func1()，接着执行func();此时的func()即你传进来的第二个函数，即func2();执行func2();
至此，func1和func2都执行了一遍
*/