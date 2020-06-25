<!--
 * @Author: your name
 * @Date: 2020-06-25 22:34:47
 * @LastEditTime: 2020-06-25 23:15:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \.vscode\supermall\src\components\content\tabControl\TabControl.vue
--> 

<template>
  <div class="tab-control">
      <div v-for="(item,index) in title" class="tab-control-item" :class="{active:currentindex===index}" @click="itemclick(index)">
        <span>{{item}}</span>
      </div>
  </div>
</template>
/* 属于高度个性化组件  子组件在这里注册 通过父组件传递*/
<script>
export default {
    name:"TabControl",
    props:{
      title:{
        type:Array,
        default(){
          return []
        }
      }
    },
    data(){
      return {
        currentindex:0
      }
    },
    methods:{
      itemclick(index){
        this.currentindex = index
      }
    }
}
</script>

<style>
    .tab-control {
    display: flex;
    text-align: center;
    line-height: 40px;
    font-size: 15px;
    background-color: #fff;
  }

  .tab-control-item {
    flex: 1;
  }

  .tab-control-item span {
    padding: 5px;
  }

  .active {
    color: var(--color-high-text);
  }

  .tab-control-item.active span {
    border-bottom: 2px solid var(--color-high-text);
  }
</style>