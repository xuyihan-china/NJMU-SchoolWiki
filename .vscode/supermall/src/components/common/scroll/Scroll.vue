<!--
 * @Author: your name
 * @Date: 2020-06-26 21:48:09
 * @LastEditTime: 2020-06-26 21:59:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \.vscode\supermall\src\components\common\scroll\Scroll.vue
--> 
<template>
  <div>
      <!-- ref  -->
      <div class="wrapper" ref="">
          <div class="content">
              <slot></slot>
          </div>
      </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
    name:"Scroll",
    date(){
        return {
            scroll:null
        }
    },
    mounted(){
        this.scroll = new Bscroll('.wrapper',{

        })
    }
}
</script>

<style>

</style>