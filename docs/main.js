// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import DemoBlock from './components/demo-block'
import MButton from 'vue-m-button'
import 'vue-m-button/dist/css/default.css'
import MForm from '@/index'
// import MForm from '@/../index'
Vue.use(MButton)
Vue.component('DemoBlock', DemoBlock)
Vue.use(MForm)

Vue.config.productionTip = true

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
