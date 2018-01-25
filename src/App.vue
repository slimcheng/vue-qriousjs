<template>
  <div id="app">
    <vueQriousjs :config="config"></vueQriousjs>
  </div>
</template>

<script>


export default {
  name: 'app',
  data () {
    return {
      config:{
        level: 'M',
        padding: 25,
        size: 500,
        value: 'https://github.com/neocotic/qrious'
      }
    }
  },
  mounted () {
    
  }
}
</script>

<style>

</style>
