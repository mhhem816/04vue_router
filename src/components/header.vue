<template>
  <h1>O-HO-RA</h1>

 <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#"><img src="images/logo.png" alt=""></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" >
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav" @click="close">
    <ul class="navbar-nav">
      <!-- <li class="nav-item active">
        <a class="nav-link" href="#">brand</a>
      </li> -->
      <li class="nav-item text-center"  v-for="(item,i) in menu" :key="i">
        <router-link class="nav-link" :to="menu[i].link">{{menu[i].title}}</router-link>
      </li>
      <!-- <li class="nav-item">
        <a class="nav-link" href="#">event</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">riview</a>
      </li> -->

    </ul>
  </div>
  <!-- <ul class="navbar-nav clearfix">
        <li v-for="(item,i) in menu" :key="i">
              <router-link :to="menu[i].link">{{menu[i].title}}</router-link>
        </li>
  </ul> -->

</nav>
</template>

<script>
export default {
    name:"header",
    data(){
        return{
            menu:[
                {title:'HOME',link:'/'},
                {title:'Brand',link:'/brand'},
                {title:'Shop',link:'/shop'},
                {title:'Review',link:'/event'},
                {title:'Q&A',link:'/review'},
            ]

        }
    },
    methods:{
    close:function(){
      document.getElementById("navbarNav").classList.remove("show");
    }
    // erow함수로도 쓸수있다. ()=>{
    // document.getElementById("navbarNav").classList.remove(show);
    }
  

}
</script>


<style>

</style>