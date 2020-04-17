/* 
  Buffer 缓冲区 
         buffer结构和数组一样
         操作和数组也差不多 数组不能存二进制文件 buffer可以存储二进制文件
         使用buffer只要直接使用 存储的都是二进制
         范围 00-ff 0-255
*/
// var str ='atguigu';
// var buf = Buffer.from(str);
//将一个字符串保存到Buffer中
// 
//创建10字节的Buffer
var buf2 = Buffer.alloc(10);
// var buf2 = new Buffer(30);
//通过索引来为Buffer赋值
//Buffer的大小一旦确定 不可以修改 在底层操作  分配10个空间 占用内存的 

buf2[3]=255;
buf2[1]=0xaa;
buf2[0]=15;
console.log(buf2);
var buf3 = Buffer.allocUnsafe(10);
//十个字符的数据 buffer中含有铭感数据 没有清空数据 还保存着数据
//alloc allocUnsafe buffer.from 将一个字符串转化为Buffer
//Buffer.alloc 创建指定大小的Buffer
//Buffer.allocUnsafe 包含铭感数据
//用户传递的数据 发送的数据 二进制都是存到Buffer中
var buf4 = Buffer.from("woshiwenbeng");
console.log(buf4.toString());
//将缓冲区转化为字符串