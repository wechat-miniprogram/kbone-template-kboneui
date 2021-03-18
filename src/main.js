import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import KBoneUI from 'kbone-ui' // 引入完整 kbone-ui
// import KBoneUI from 'kbone-ui/wx-components' // 只引入内置组件

KBoneUI.register()

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
})
