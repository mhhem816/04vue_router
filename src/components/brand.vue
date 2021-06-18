<template>
  <h2>brand 소개</h2>
  <div class="container">
      <div class="row">
          <div class="d-block" v-for="(item,i) in rdata" :key="i">
              <img :src="rdata[i].images" alt="" class="w-100">
              {{rdata[i].title}}
              <div v-html="rdata[i].content" class="text-center"></div>
              <div v-html="rdata[i].title" class="text-center "></div>
          </div>
      </div>
  </div>

</template>

<script>
export default {
    name:'brand',
    props:['rdata'],

}
</script>

<style>

</style>