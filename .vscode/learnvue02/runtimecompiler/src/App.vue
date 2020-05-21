<template>
  <div id="app">
    <img src="./assets/logo.png">
    <HelloWorld/>
    <xyh/>
  </div>
  <!-- 这里是整个主页的模板 -->
</template>


<script>
import HelloWorld from './components/HelloWorld'
/* 还需要创建组件之间的联系  把组件全部引入*/
import xyh from './components/xyh'
export default {
  name: 'App',
  components: {
    HelloWorld,
    xyh
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
