/*
 * @Author: your name
 * @Date: 2020-05-29 14:49:30
 * @LastEditTime: 2020-05-29 16:15:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \test\.vscode\learnvue02\learnaxios\network\request.js
 */ 
import axios from 'axios'
//sucess 是一个函数
export function request(config){
       
            const instace = axios.create({
                baseURL:'http://123.207.32.32:8000',
                timeout:5000
            })
            //axios 拦截器
            //拦截实例         拦截请求     传入两个参数
            axios.interceptors.request.use(config=>{
                console.log(config)
                //拦截下来的请求做这几件事情
                //比如config中的一些信息不符合服务器要求
                //比如每次发送网络请求的时候 都会有一个请求的图标
                //在这儿加 请求成功 取消掉
                //某些网络请求是必须携带一些特殊的信息 token
                //拦截用户没登陆 
                return config
            },
            err=>{
                console.log(err)
            })
            axios.interceptors.response.use()
        return instace(config)
    }
        //发送真正的网络请求
        // instace(config)
        //   .then((res)=>{
        //       //console.log(res)
        //       resolve(res)
        //       //sucess 和 failure 将返回结果传出去
        //   })
        //   .catch(err=>{
        //     //console.log(err)
        //     reject(err)
        //   })
        //   })



