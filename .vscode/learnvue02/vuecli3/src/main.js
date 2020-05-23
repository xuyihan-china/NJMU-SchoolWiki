import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
/*  产品的提示信息是false 开发阶段写false 不需要构建信息 */
new Vue({
  render: h => h(App),
}).$mount('#app')
