/* 全局变量是window的属性
   用global来验证全局变量 全局的都保存在global中
   node在函数里运行 arguments 和 this 存在于函数 不存在全局里
*/
console.log(arguments);
/* arguments.callee 属性保存的是当前保存的函数对象 */
console.log(arguments.callee);
/* 
arguments 一共传递了5个参数
      exports
        该对象用来将变量或者函数暴露在外面
      require
        函数 用来引入外部文件
      module
        代表当前模块本身
        exports是module的属性
        可以用exports或者module.exports
      filename
            console.log(filename);
            当前文件的完整路径
      dirname
         dirname 模块文件夹的完整路径
      npm remove 删除一个模块
      npm version  查看所有模块版本 
      npm search 包名 搜索包
      npm install 当前目录安装 的包 --save 加到依赖中去
      npm install -g 全局安装 一般都是工具
      npm install 下载当前项目所依赖的包
*/