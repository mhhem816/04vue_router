<template>
<div>
    <img src="images/banner02.jpg" alt="" class="w-100">
</div>
  <h2>shop</h2>
  <div class="container">
      <div class="row">
            <div class="col-lg-3 col-sm-6" v-for="(item,i) in pdata" :key="i">
                <img :src="pdata[i].images" alt="" class="w-100">
            <div @click="$emit('pOpen',pdata[i].id)">{{pdata[i].title}}</div>
            </div>
      </div>
  </div>
</template>

<script>
export default {
    name:'shop',
    props:['pdata'],

}
</script>

<style>

</style>