/* 数组不能经行二进制数的操作 */
/* js数组不如java python效率高 */
/* buffer内存空间开辟出固定大小的内存 不能加内存 */
let str ="helloworld";
let buf = Buffer.from(str);//存储的字符串是二进制的 要用tostring方法转化为你看的懂得
console.log(buf.toString());
//开辟一个空的buffer缓存区
let buf1 = Buffer.alloc(10);