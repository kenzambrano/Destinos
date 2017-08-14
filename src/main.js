import './api/firebase'
import Vue from 'vue'
import Vuetify from 'vuetify'
import VueFire from 'vuefire'
import App from './App'
import router from './router'

Vue.use(Vuetify)
Vue.use(VueFire)
Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
