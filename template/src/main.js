// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
{{#store}}
import store from './store'
{{/store}}
import util from './util/index'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'


Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(cloudUi)
Vue.use(util)
Vue.prototype.$bus = new Vue({})
Vue.directive('prevents', {
  inserted: function (el) {
    el.onsubmit = function () {
      return false
    }
  }
})
/* eslint-disable no-new */
new Vue({
  router,
  {{#store}}
  store,
  {{/store}}
  render: h => h(App)
}).$mount('#app')
