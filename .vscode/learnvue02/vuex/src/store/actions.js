/*
 * @Author: your name
 * @Date: 2020-05-28 19:48:16
 * @LastEditTime: 2020-05-28 19:53:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \test\.vscode\learnvue02\vuex\src\store\actions.js
 */ 
export default{
     //这里的 context是指 mutations里的方法
     //先定义一个方法 context 上下文
        //修改 一定要通过mutations
        aUpdateInfo(context,payload){
            setTimeout(() => {
                context.commit('updateInfo')
                console.log(payload);
            }, 1000);
        }
}