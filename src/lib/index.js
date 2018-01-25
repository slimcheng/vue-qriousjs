/*
 * @Author: slimcheng 
 * @Date: 2018-01-25 10:55:08 
 * @Last Modified by: slimcheng
 * @Last Modified time: 2018-01-25 21:34:38
 */

import vueQriousjs from './vue-qriousjs.vue'

const _vueqriousjs = {
  install: function (Vue) {
    if (typeof window !== 'undefined' && window.Vue) {
      Vue = window.Vue
    }
    Vue.component(vueQriousjs.name, vueQriousjs)
  }
}

export default _vueqriousjs