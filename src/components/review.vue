<template>
  <h2>문의사항</h2>
<table class="table">
  <thead>
    <tr class="text-center">
      <th scope="col">#</th>
      <th scope="col">제목</th>
      <th scope="col">내용</th>
      <th scope="col">날짜</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(item,i) in bdata" :key="i">
      <th scope="row">{{bdata[i].idx}}</th>
      <td>{{bdata[i].title}}</td>
      <td>{{bdata[i].content}}</td>
      <td>{{bdata[i].date}}</td>

    </tr>

  </tbody>
</table>
</template>
<script>
export default {
  name:"Q&A",
  props:['bdata'],
    
  
}
</script>

<style>

</style>