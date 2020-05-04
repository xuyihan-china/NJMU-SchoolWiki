/* function Fn() 这是函数对象 函数作为对象使用的时候 叫函数对象 */
/* new 函数产生的对象 叫实例对象 */
function Fn(){

}
const fn = new Fn();
console.log(Fn.prototype);//代表Fn是一个对象 而不是一个函数
//（）前面的叫函数 用.来调用的是对象
Fn.bind()//bind 改变this 指向 Fn对象 是FUnction的一个实例 所以找Function 的原型 这个方法在Function 的原型上
$('') 这是jq函数
$.get() 这是函数对象
