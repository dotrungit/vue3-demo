<template>
  <div class="wrapper">
    <swiper
      :slidesPerView="slidesPerView"
      :spaceBetween="spaceBetween"
      :freeMode="true"
      :pagination="pagination"
      :cssMode="true"
      :navigation="navigation"
      :mousewheel="true"
      :keyboard="true"
      :modules="modules"
      class="mySwiper"
    >
      <swiper-slide v-for="(src, index) in slides" :key="`slide-${index}`">
        <img :src="String(src)" alt="src" />
      </swiper-slide>
    </swiper>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue'
  import { Swiper, SwiperSlide } from 'swiper/vue'
  import 'swiper/css'
  import 'swiper/css/free-mode'
  import 'swiper/css/pagination'
  import 'swiper/css/navigation'
  import {
    FreeMode,
    Navigation,
    Pagination,
    Mousewheel,
    Keyboard,
  } from 'swiper'

  export default defineComponent({
    components: {
      Swiper,
      SwiperSlide,
    },
    props: {
      slides: {
        type: Array,
        default: () => [],
      },
      slidesPerView: {
        type: Number,
        default: 3,
      },
      spaceBetween: {
        type: Number,
        default: 30,
      },
      pagination: {
        type: Boolean,
        default: true,
      },
      navigation: {
        type: Boolean,
        default: true,
      },
    },
    setup() {
      return {
        modules: [FreeMode, Navigation, Pagination, Mousewheel, Keyboard],
      }
    },
  })
</script>
<style>
  .wrapper {
    background: #eee;
    font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
    font-size: 14px;
    color: #000;
    margin: 0;
    padding: 0;
    position: relative;
    width: 100vw;
    height: 50vh;
  }

  .swiper {
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
