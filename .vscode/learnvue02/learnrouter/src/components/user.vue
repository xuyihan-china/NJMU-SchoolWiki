<template>
  <div>
      <h4>我是用户信息</h4>
      <h4>你是{{userid}}</h4>
  </div>
</template>

<script>
export default {
    name:"user",
    computed:{
        userid(){
            return this.$route.params.xuyiha
            /* 当前哪个路由活跃 拿到的就是哪个路由 route 而不是router*/
        }
    }
}
</script>

<style>

</style>