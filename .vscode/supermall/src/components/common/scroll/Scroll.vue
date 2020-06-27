<!--
 * @Author: your name
 * @Date: 2020-06-26 21:48:09
 * @LastEditTime: 2020-06-27 12:09:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \.vscode\supermall\src\components\common\scroll\Scroll.vue
--> 
<template>
  
      <!-- ref  -->
      <div class="wrapper" ref="wrapper">
          <!-- queryselector 拿到的不一定是 相应的 组件 组件之间可能重名 所以用上ref 属性 
                ref 在组件中 写 通过 this.$refs.rename 拿到
                ref 写在元素中 写通过 this.$refs.rename 拿到
          -->
          <div class="content">
              <slot></slot>
          </div>
      </div>
  
</template>

<script>
import BScroll from 'better-scroll'
export default {
    name:"Scroll",
    data(){
        return {
           scroll:null
        }
    },
    mounted(){
        this.scroll = new BScroll(this.$refs.wrapper,{
            click:true
        })
    }
}
</script>

<style>
    .content{
        overflow: hidden;
    }
</style>