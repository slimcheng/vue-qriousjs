/*
 * @Author: slimcheng 
 * @Date: 2018-01-25 10:54:27 
 * @Last Modified by: slimcheng
 * @Last Modified time: 2018-01-25 14:52:28
 */

<template>
  <img :src="imgsrc" alt="">
</template>

<script>
import QRious from 'qrious'
export default {
    name:'vueQriousjs',
    props: {
        config: {
            type: Object,
            default: function () {
                return { 
                    
                }
            }
        }
    },
    data() {
        
        return {
            qr:new QRious(this.config),
            imgsrc: ''
        }
    },
    mounted () {
        this.imgsrc = this.qr.toDataURL();
    },
    watch: {
        config:{
            handler:function(newValue, oldValue) {
                var t=this;
                t.qr.set(t.config);
                t.imgsrc=t.qr.toDataURL();
            },
　　　　     deep: true
        }
    
    },
    methods: {
        
    }
}
</script>
