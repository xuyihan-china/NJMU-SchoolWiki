<template>
  <div>
      <p>这是我写的组件</p>
      <p>{{msg}}</p>
  </div>
</template>

<script>
export default {
    name:'xyh',
    data(){
        return{
            msg:"小朋友的善法园"
        }
    }
}
</script>

<style>
    p{
        color:red
    }
</style>