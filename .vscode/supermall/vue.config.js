/*
 * @Author: your name
 * @Date: 2020-06-24 22:47:09
 * @LastEditTime: 2020-06-24 23:09:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \.vscode\supermall\vue.config.js
 */ 
//导出自己写的配置  然后会和vue.js合并的
module.exports={
    //固定写法
    configureWebpack:{
        resolve:{
            alias:{
                //配置别名 @就是./src
                'assets':'@/assets',
                'common':'@/common',
                'components':'@/components',
                'views':'@/views',
                'network':'@/network'
            }
        }
    }
}