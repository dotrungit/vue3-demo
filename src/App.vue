<script setup lang="ts">
  // This starter template is using Vue 3 <script setup> SFCs
  // Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
</script>

<template>
  <nav
    class="sticky top-0 z-50 flex items-center justify-between flex-wrap bg-blue-500 py-3 px-6"
  >
    <div
      class="container mx-auto block flex-grow lg:flex lg:items-center lg:w-auto"
    >
      <div class="text-sm lg:flex-grow">
        <router-link
          class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4"
          :to="{ name: 'Gallery' }"
          >Gallery</router-link
        >
        <router-link
          class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4"
          :to="{ name: 'Contact' }"
          >Contact</router-link
        >
        <router-link
          class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4"
          :to="{ name: 'Swiper' }"
          >Swiper</router-link
        >
      </div>
    </div>
  </nav>

  <router-view />
</template>
