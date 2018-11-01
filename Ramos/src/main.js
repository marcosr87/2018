import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vbc from 'vue-bulma-components'
Vue.use(vbc)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
