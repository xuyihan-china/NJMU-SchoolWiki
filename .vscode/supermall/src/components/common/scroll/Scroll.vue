<!--
 * @Author: your name
 * @Date: 2020-06-26 21:48:09
 * @LastEditTime: 2020-06-27 14:52:29
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
    props:{
        probeType:{
            type:Number,
            default:0
        },
        pullUpLoad:{//pull Up Load 不是pulling wo diao
            type:Boolean,
            default:false
        }
    }
    
    ,
    data(){
        return {
           scroll:null
        }
    },
    mounted(){
        //创建better scroll
        this.scroll = new BScroll(this.$refs.wrapper,{
            click:true,
            probeType:this.probeType,
            pullUpLoad:this.pullUpLoad
        })
        //监听滚动的位置
        this.scroll.on('scroll',(position)=>{
            this.$emit('scroll',position)
            //子组件发送位置信息
            //console.log("hauil")
        })
        //监听上拉事件
        this.scroll.on('pullingUp',()=>{
            this.$emit('pullingUp')
        })
    },
    methods:{
        scrollTo(x,y,time){
            this.scroll.scrollTo(x,y,time)
        }
    }
}
</script>

<style>
    .content{
        overflow: hidden;
    }
</style>