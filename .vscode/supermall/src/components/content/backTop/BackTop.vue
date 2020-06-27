<!--
 * @Author: your name
 * @Date: 2020-06-27 12:24:20
 * @LastEditTime: 2020-06-27 12:33:18
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \.vscode\supermall\src\components\content\backTop\BackTop.vue
--> 
<template>
  <div class="back-top" @click="backClick">
      <img src="~assets/img/common/top.png" alt="">
  </div>
</template>
<script>
export default {
    name:"BackTop",
    methods:{
        backClick(){
            
        }
    }
}
</script>

<style scoped>
    .back-top{
        position: fixed;
        right: 10px;
        bottom: 60px;
    }
    .back-top img{
        height: 40px;
        width: 40px;
    }
</style>