/*
 * @Author: your name
 * @Date: 2020-05-28 19:48:40
 * @LastEditTime: 2020-05-28 20:04:18
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \test\.vscode\learnvue02\vuex\src\store\mutations.js
 */
import { INCREMENT} from './mutations-types'
export default {
    //对数值改变 的方法
        //state 自动传入 在这里写方法
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
}