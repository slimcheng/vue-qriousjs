/*
 * @Author: slimcheng 
 * @Date: 2018-01-25 10:55:08 
 * @Last Modified by: slimcheng
 * @Last Modified time: 2018-01-25 15:30:42
 */

import vueQriousjs from './vue-qriousjs.vue'
const _vueqriousjs = { 
    install (Vue, options) { 
        Vue.component(vueQriousjs.name, vueQriousjs)
    } 
} 
    
export default _vueqriousjs

if (typeof window !== 'undefined' && window.Vue) { window.Vue.use(_vueqriousjs); }
