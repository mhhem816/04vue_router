<template>
<!-- <div v-if="pView==true">
    <div class="pPop text-center">
      <img :src="pdata[pNum].images" alt="" class="w-100">
      <p>{{pdata[pNum].title}}</p>
      <button class="btn btn-primary" @click="pView=false">닫기</button>
    </div>
</div> -->

  <top-header />
  <pPop
    :pdata="pdata"
    :pView="pView"
    :pNum="pNum"
    @close="pView=false"

   />
  <router-view :pdata="pdata" @pOpen="pView=true;pNum=$event" :rdata="rdata" :bdata="bdata" :adata="adata"></router-view>
  <bottom-footer/>

  
</template>

<script>
import header from './components/header.vue'
import footer from './components/footer.vue'
import pdata from './pdata.js'
import rdata from './rdata.js'
import bdata from './bdata.js'
import adata from './adata.js'
import pPop from './components/pPop.vue'


export default {
    name:'app',
  components:{
    'top-header':header,
    'bottom-footer':footer,
    pPop,
  },
  data(){
    return{
      pdata:pdata,
      bdata,
      rdata,
      adata,
       // 받아논 데이터값
      pView:false,
      pNum:0,
      //조절하는 데이터값
    
    }
  },
  

}
</script>

<style>
.pPop{position: fixed; z-index: 10; background:#fff; 
width: 80%; top:50%; left: 50%;
 transform: translate(-50%,-50%);box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
border-radius: 10px; padding: 20px;}

 @media screen and (min-width:900px){
  .pPop{width:800px;}

 }

/* .fade-enter-from{}
.fade-enter-active{}
.fade-enter-to{}

.fade-leave-from{}
.fade-leave-active{}
.fade-leave-to{} */

</style>