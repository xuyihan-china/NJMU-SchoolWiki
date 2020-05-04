console.log("我是模块2");
var x=10;
var y=20;
/* 向外部暴露属性 变量 */
exports.x='js里';
/* exports 全局变量  */
exports.y=y;
exports.fn=function(){};