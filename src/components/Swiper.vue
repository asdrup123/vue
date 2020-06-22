<template>
 <swiper class="swiper" :options="swiperOption">
    <swiper-slide :key="banner.id" v-for="banner in banners">
      <img class="image" :src="banner.url">
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
  </swiper>
</template>

<script>
/* eslint-disable */
import Swiper from '@/../static/js/swiper.min.js'
export default {
    data () {
      return {
        banners: [
           {
             id: 0,
             url: require("../assets/1.jpg"),
             title: "japan1"
            },
            {
              id: 1,
              url: require("../assets/2.jpg"),
              title: "japan2"
            },
            {
              id: 2,
              url: require("../assets/3.jpg"),
              title: "japan3"
            },
            {
              id: 3,
              url: require("../assets/4.jpg"),
              title: "japan4"
            }
          ],
         swiperOption: {
          slidesPerView: 1,
          spaceBetween: 30,
          loop: true,
          autoplay: 
          {
            disableOnInteraction: false,
          },
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
          // ...
        }
      }
    },
    mounted() {
      console.log('Current Swiper instance object', this.mySwiper)
      this.mySwiper.slideTo(3, 1000, false)
    },
  }
</script>

<style scoped>

@import url("../assets/css/swiper.min.css");

.swiper-container {
  width: 500px;
  height: 300px;
  margin: 20px auto;
}
.swiper-slide .image{
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
}
</style>