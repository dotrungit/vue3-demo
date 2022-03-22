<template>
  <div class="container">
    <swiper
      :slides-per-view="slidesPerView"
      :space-between="spaceBetween"
      :pagination="pagination"
      :navigation="navigation"
      :mousewheel="mousewheel"
      :slides="slides"
    ></swiper>
  </div>
  <div class="container mx-auto flex flex-wrap align-middle mt-5">
    <div class="md:mb-0 relative">
      <label
        class="block uppercase tracking-wide text-gray-700 text-xs font-bold"
      >
        Number slide in page:
      </label>
    </div>
    <input
      type="range"
      class="ml-5"
      min="0"
      max="5"
      step="1"
      v-model="slidesPerView"
    />
    <span class="text-xs ml-3">{{ slidesPerView }}</span>
  </div>
  <div class="container mx-auto flex flex-wrap align-middle mt-5">
    <div class="md:mb-0 relative">
      <label
        class="block uppercase tracking-wide text-gray-700 text-xs font-bold"
      >
        Space between slides
      </label>
    </div>
    <input
      type="range"
      class="ml-5"
      min="0"
      max="100"
      step="10"
      v-model="spaceBetween"
    />
    <span class="text-xs ml-3">{{ spaceBetween }}</span>
  </div>
  <div class="container flex mx-auto items-center mt-3">
    <div class="flex items-center md:mb-0 relative">
      <label
        class="flex items-center uppercase text-gray-700 text-xs font-bold"
      >
        Option:
      </label>
    </div>
    <div class="flex items-center ml-3 mr-6">
      <input v-model="navigation" class="mr-2 leading-tight" type="checkbox" />
      <span class="text-sm"> Navigation </span>
    </div>
    <div class="flex items-center mr-6">
      <input v-model="pagination" class="mr-2 leading-tight" type="checkbox" />
      <span class="text-sm"> Pagination </span>
    </div>
    <div class="flex items-center">
      <input v-model="mousewheel" class="mr-2 leading-tight" type="checkbox" />
      <span class="text-sm"> Mousewheel </span>
    </div>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue'
  import Swiper from '../components/swiper.vue'

  export default defineComponent({
    components: {
      Swiper,
    },
    setup() {
      return {}
    },
    data() {
      return {
        slides: [
          'https://swiperjs.com/demos/images/nature-1.jpg',
          'https://swiperjs.com/demos/images/nature-2.jpg',
          'https://swiperjs.com/demos/images/nature-3.jpg',
          'https://swiperjs.com/demos/images/nature-4.jpg',
          'https://swiperjs.com/demos/images/nature-5.jpg',
          'https://swiperjs.com/demos/images/nature-6.jpg',
          'https://swiperjs.com/demos/images/nature-7.jpg',
          'https://swiperjs.com/demos/images/nature-8.jpg',
          'https://swiperjs.com/demos/images/nature-9.jpg',
        ],
        slidesPerView: 3,
        spaceBetween: 30,
        freeMode: true,
        pagination: true,
        navigation: true,
        mousewheel: true,
      }
    },
  })
</script>
<style></style>
