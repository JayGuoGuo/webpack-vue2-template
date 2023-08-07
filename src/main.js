import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import storeOptions from './store'
import router from './router'

Vue.use(Vuex)

const store = new Vuex.Store(storeOptions)

Vue.use(VueRouter)
Vue.use(ElementUI)

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
