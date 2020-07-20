<!--
 * @Author: your name
 * @Date: 2020-06-26 21:48:09
 * @LastEditTime: 2020-07-19 23:13:29
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
/* common 中写 components 下面分common content  */
/* common 中是高度封装的 里面一般是插槽 不会随项目改变而改变 */
/* content 中是 与项目有关的 插入插槽中使用的 */
import BScroll from 'better-scroll'
//下载下来的插件 直接引入
//如果是 export 那么 引入要{goodslist , xxxx}
//如果是export default 那么引入是 import + name  
export default {
    name:"Scroll",
    //props 传递数据就是通过 写在组件的 :组件中的 = 自己的data
    props:{
        probeType:{
            type:Number,
            default:0
        },//在common中只要接受数据就行了 于业务没有关系
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
        if(this.pullUpLoad){
            this.scroll.on('pullingUp',()=>{
                this.$emit('pullingUp')
        })
        }
    },
    methods:{
        scrollTo(x,y,time){
            this.scroll.scrollTo(x,y,time)
        },
        finishPullUp(){
            this.scroll.finishPullUp()
        },
        refresh() {
        this.scroll && this.scroll.refresh && this.scroll.refresh()
      },
    }
}
</script>

<style>
    .content{
        overflow: hidden;
    }
</style>