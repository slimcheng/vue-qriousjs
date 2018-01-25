import Vue from 'vue'
import App from './App.vue'
import vueQriousjs from 'vue-qriousjs' 
Vue.use(vueQriousjs)

new Vue({
  el: '#app',
  render: h => h(App)
})
