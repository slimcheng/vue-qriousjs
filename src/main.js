import Vue from 'vue'
import App from './App.vue'
import vueQriousjs from './lib/index' 
Vue.use(vueQriousjs)

new Vue({
  el: '#app',
  render: h => h(App)
})
