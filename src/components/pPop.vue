<template>
  
<div v-if="pView==true">
    <div class="pPop text-center">
      <img :src="pdata[pNum].images" alt="" class="w-100">
      <p>{{pdata[pNum].title}}</p>
      <button class="btn btn-primary" @click="$emit('close')">닫기</button>
    </div>
</div>
  
</template>

<script>

export default {
    name:'pPop',
    props:['pdata','pView','pNum'],


}
</script>

<style>

</style>