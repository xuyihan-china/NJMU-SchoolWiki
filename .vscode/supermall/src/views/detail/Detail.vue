<!--
 * @Author: your name
 * @Date: 2020-06-28 19:07:29
 * @LastEditTime: 2020-06-28 20:33:27
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \.vscode\supermall\src\views\detail\Detail.vue
--> 
<template>
  <div>
      <h2>详情页</h2>
      <h1>{{iid}}</h1>
  </div>
</template>

<script>
export default {
    name:"Detail",
    data(){
      return{
        iid:null
      }
    },
    created(){
      this.iid=this.$route.params.iid
    }
    
}
</script>


<style scoped>

</style>