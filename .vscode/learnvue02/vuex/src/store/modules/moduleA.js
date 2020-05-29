/*
 * @Author: your name
 * @Date: 2020-05-28 19:49:39
 * @LastEditTime: 2020-05-28 20:22:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \test\.vscode\learnvue02\vuex\src\store\modules\moduleA.js
 */ 

export default{
    state:{
        name:'zhangsan'
    },
    mutations:{
        updateName(state,payload){
            state.name=payload
        }
    },
    actions:{
        aUpdateName(context){
            setTimeout(() => {
                context.commit('updateName','wangwu')
            }, 1000);
        } 
    },
    getters:{//这就是为了看getters 在模块中 是如何被外面引用的
        fullname(state){
            return state.name+'1111'
        },
        //下面的getters想用上面的getters 这里的getters 对应的是fullname 的getters
        fullname2(state,getters){
            return getters.fullname+'222'
        },
        /* 还有一个需求就是 把vuex 就是下面第四行 不是这个模块的 大模块counter 拼接 */
        /* rootState 就是指的根 newnewvuex */
        fullname3(state,getters,rootState){
            return getters.fullname2+ rootState.counter
        }
    }
}

