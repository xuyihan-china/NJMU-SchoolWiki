

/*
 * @Author: your name
 * @Date: 2020-05-27 16:58:44
 * @LastEditTime: 2020-05-28 12:18:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \test\.vscode\learnvue02\vuex\src\store\index.js
 */ 


import Vue from 'vue'
import Vuex from 'vuex'
import { INCREMENT} from './mutations-types'
Vue.use(Vuex)
//创建对象
const store = new Vuex.Store({
    state:{
        counter:1000,
        info:{
            name:'kobe',
            age:'40',
            height:1.98
        }
    },
    mutations:{
        //对数值改变 的方法
        //state 自动传入 
        [INCREMENT](state){
            state.counter++
        },
        decrement(state){
            state.counter--
        },
        addCount(state,count){//payload携带参数
            state.counter+=count
        },
        updateInfo(state){
            state.info.name='coderwhy'
        }
        // addCount(state,payload){//payload携带参数
        //     state.counter+=payload.count
        // }
    },
    actions:{
        //先定义一个方法 context 上下文
        //修改 一定要通过mutations
        aUpdateInfo(context,payload){
            setTimeout(() => {
                context.commit('updateInfo')
                console.log(payload);
            }, 1000);
        }
    },
    //类似于计算属性
    getters:{
        powercounter(state,count){
            //return $state.counter*$state.counter
            
        }
    },
    modules:{

    }
})
//导出对象
export default store