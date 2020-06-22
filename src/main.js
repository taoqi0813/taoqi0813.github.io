import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Element from 'element-ui'
Vue.use(Element)
import './styles/element-variables.scss'
import '@/styles/index.scss' // global css

import PeachCropper from 'peach-cropper'
Vue.use(PeachCropper)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
