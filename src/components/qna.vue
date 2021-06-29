<template>
  <h2>riview</h2>
<table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">제목</th>
      <th scope="col">내용</th>
      <th scope="col">날짜</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(item,i) in adata" :key="i">
      <th scope="row">{{adata[i].idx}}</th>
      <td>{{bdata[i].title}}</td>
      <td>{{bdata[i].content}}</td>
      <td>{{bdata[i].date}}</td>

    </tr>

  </tbody>
</table>
</template>
<script>
export default {
  name:"review",
  props:['adata'],
    
  
}
</script>

<style>

</style>