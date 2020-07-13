<!--
 * @Author: your name
 * @Date: 2020-06-29 14:39:25
 * @LastEditTime: 2020-07-13 20:56:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \.vscode\supermall\src\views\detail\childComps\DetailNavBar.vue
--> 
<template>
  <div class="DetailNavBar">
      <nav-bar>
          <div slot="center" class="title"  >
              <div class="title-item"
                   v-for="(item,index) in titles"
                   :class="{active:currentIndex===index}" 
                   @click="itemClick(index)">
                  {{item}}
              </div>
         5 </div>
          <img slot="left" class="back" @click="backClick" src="~assets/img/common/back.svg" alt="">
      </nav-bar>
  </div>
</template>
<script>
import NavBar from 'components/common/navbar/NavBar';
export default {
    name:"DetailNavBar",
    data(){
        return{
            titles:['商品', '参数', '评论', '推荐'],
            currentIndex:0
        }
    },
    components:{
        NavBar
    },
    methods:{
        itemClick(index){
            this.currentIndex = index
            this.$emit('titleClick',index)
        },
        backClick(){
            this.$router.back()   
        }
    }
}
</script>

<style scoped>
    .back{
        margin-top: 10px;
    }
    .title{
        display: flex;
    }
    .title-item{
        flex: 1;
        font-size: 15px;
    }
    .active{
        color: cornflowerblue;
    }
</style>
