//改文件是整个项目的入口文件
// 引入vue
import Vue from 'vue'
// 引入APP组件,他是所有组件的父组件
import App from './App.vue'
//关闭vue的生产提示
Vue.config.productionTip = false
// 创建vue实例
new Vue({
    render: h => h(App),
}).$mount('#app')