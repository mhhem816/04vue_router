<template>
  <h2>review</h2>
<table class="table">
  <thead>
    <tr class="text-center">
      <th scope="col">#</th>
      <th scope="col">아이디</th>
      <th scope="col">후기</th>
      <th scope="col">날짜</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(item,i) in adata" :key="i" class="text-center">
      <th scope="row">{{adata[i].idx}}</th>
      <td>{{adata[i].id}}</td>
      <td>{{adata[i].content}}</td>
      <td>{{adata[i].date}}</td>

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