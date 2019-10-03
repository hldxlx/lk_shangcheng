import Vue from 'vue'
import App from './App'

// 引入路由器
import router from './router/index'
import LyTab from 'ly-tab'
import store from './store'
Vue.use(LyTab);

new Vue({
  el:'#app',
  router,
  store,
  render: h=>h(App)
});
