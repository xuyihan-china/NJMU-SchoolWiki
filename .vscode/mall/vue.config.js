/*
 * @Author: your name
 * @Date: 2020-06-21 21:11:07
 * @LastEditTime: 2020-06-21 21:22:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \.vscode\mall\vue.config.js
 */ 
module.exports={
    configureWebpack:{
        resolve:{
            //解决路径相关的东西
            alias:{
                //配置别名方便 取到文件
                'assets':'@/assets',
                'common':'@/common',
                'components':'@/components',
                'network':'@/network'                       
            }
        }
    }
}