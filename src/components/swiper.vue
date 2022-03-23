<template>
  <div class="wrapper md:w-10/12 mx-auto p-6">
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
  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
</style>
