<template>
  <top-header />
  <router-view :pdata="pdata" :rdata="rdata"></router-view>
  <bottom-footer/>

  
</template>

<script>
import header from './components/header.vue'
import footer from './components/footer.vue'
import pdata from './pdata.js'
import rdata from './rdata.js'

export default {
    name:'app',
  components:{
    'top-header':header,
    'bottom-footer':footer,
  },
  data(){
    return{
      pdata:pdata,
      rdata,
    
    }
  }

}
</script>

<style>

</style>
