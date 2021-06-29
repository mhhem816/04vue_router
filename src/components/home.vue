<template>

<swiper :pagination="true" class="mySwiper mb-5">
  <swiper-slide><img src="images/banner01.png" alt=""></swiper-slide>
  <swiper-slide><img src="images/banner02.jpg" alt=""></swiper-slide>
  <swiper-slide><img src="images/banner03.jpg" alt=""></swiper-slide>
  <swiper-slide><img src="images/banner04.jpg" alt=""></swiper-slide>
  <swiper-slide><img src="images/banner05.jpg" alt=""></swiper-slide>
  <swiper-slide><img src="images/banner06.jpg" alt=""></swiper-slide>

</swiper>
    <div class="container">
        <h3>Best item</h3>
        <p>가장 인기있는 상품소개</p>
        <div class="row mb-5">
            <div class="col-lg-3 col-sm-6" v-for="(item,i) in pdata" :key="i">
                <img :src="pdata[i].images" alt="" class="w-100">
            <div @click="$emit('pOpen',pdata[i].id)">{{pdata[i].title}}</div>
            <div @click="$emit('pOpen',pdata[i].id)">{{pdata[i].content}}</div>
            <div @click="$emit('pOpen',pdata[i].id)">{{pdata[i].price}}</div>
            </div>
        </div>
        <div class="btn btn-primary m-auto d-block" style="width:100px">
        <router-link to="/shop">바로가기</router-link>
        </div>
    </div>


</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import "swiper/components/pagination/pagination.min.css"


// Import Swiper styles
import 'swiper/swiper.scss';
import SwiperCore, {
  Pagination
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([Pagination]);


export default {
    props:['pdata'],
    components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
        
        
    };
  },
  methods: {
    
  }

}
</script>

<style>
.swiper-container {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}


</style>