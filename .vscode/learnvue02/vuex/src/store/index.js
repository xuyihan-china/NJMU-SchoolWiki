

/*
 * @Author: your name
 * @Date: 2020-05-27 16:58:44
 * @LastEditTime: 2020-05-28 20:14:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \test\.vscode\learnvue02\vuex\src\store\index.js
 */ 


import Vue from 'vue'
import Vuex from 'vuex'

import actions from './actions'
import mutations from './mutations'
import getters from './getters'
import moduleA from './modules/moduleA'
Vue.use(Vuex)
//创建对象
const state = {
    counter:1000,
    info:{
        name:'kobe',
        age:'40',
        height:1.98
    }
}
const store = new Vuex.Store({
    state,
    mutations,
    actions,
    //类似于计算属性
    getters,
    modules:{
        a:moduleA
    }
})
//导出对象
export default store