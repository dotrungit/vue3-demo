<template>
  <modal text-button="Setting" class="fixed h-auto top-16 right-20 z-40">
    <div class="bg-neutral-200 p-6">
      <h1 class="text-xl font-bold text-black mb-4 w-11/12 lg:w-10/12 mx-auto">
        Configs Component
      </h1>

      <app-tabs class="w-11/12 lg:w-10/12 mx-auto mb-16" :tabList="tabList">
        <template v-slot:tabPanel-1>
          <div class="container mx-auto flex flex-wrap align-middle mt-5">
            <textarea
              :value="getStringFromJson(contact)"
              ref="contact"
              class="resize rounded border w-full h-full p-3"
              cols="50"
              rows="25"
              spellcheck="false"
            ></textarea>
          </div>

          <div class="mb-4 container mx-auto mt-4">
            <button
              class="bg-blue-400 hover:bg-blue-700 text-white font-bold px-2 py-1 rounded"
              @click="syncContactConfig"
            >
              Sync
            </button>
          </div>
        </template>
        <template v-slot:tabPanel-2>
          <div class="container mx-auto flex flex-wrap align-middle mt-5">
            <textarea
              :value="getStringFromJson(gallery)"
              ref="gallery"
              class="resize rounded border w-full h-full p-3"
              cols="50"
              rows="25"
              spellcheck="false"
            ></textarea>
          </div>

          <div class="mb-4 container mx-auto mt-4">
            <button
              class="bg-blue-400 hover:bg-blue-700 text-white font-bold px-2 py-1 rounded"
              @click="syncGalleryConfig"
            >
              Sync
            </button>
          </div>
        </template>
        <template v-slot:tabPanel-3>
          <div class="container mx-auto flex flex-wrap align-middle mt-5">
            <textarea
              :value="getStringFromJson(swiper)"
              ref="swiper"
              class="resize rounded border w-full h-full p-3"
              cols="50"
              rows="25"
            ></textarea>
          </div>

          <div class="mb-4 container mx-auto mt-4">
            <button
              class="bg-blue-400 hover:bg-blue-700 text-white font-bold px-2 py-1 rounded"
              @click="syncSwiperConfig"
            >
              Sync
            </button>
          </div>
        </template>
      </app-tabs>
    </div>
  </modal>
  <div
    class="flex justify-between items-center pl-5 mb-4 md:w-10/12 mx-auto mt-10"
  >
    <h5
      class="text-xl text-2xl font-bold leading-none text-gray-900 dark:text-white"
    >
      Swiper
    </h5>
  </div>
  <swiper
    :slides-per-view="swiper.configs.slidesPerView"
    :space-between="swiper.configs.spaceBetween"
    :pagination="swiper.configs.pagination"
    :navigation="swiper.configs.navigation"
    :mousewheel="swiper.configs.mousewheel"
    :slides="swiper.slides"
  ></swiper>
  <div class="py-4">
    <div class="w-full border-t border-gray-300"></div>
  </div>
  <div
    class="flex justify-between items-center pl-5 mb-4 md:w-10/12 mx-auto mt-5"
  >
    <h5
      class="text-xl text-2xl font-bold leading-none text-gray-900 dark:text-white"
    >
      Gallery
    </h5>
  </div>
  <gallery
    :images="images"
    :gap="gallery.configs.gap"
    :columns="gallery.configs.columns"
  >
  </gallery>
  <div class="py-4">
    <div class="w-full border-t border-gray-300"></div>
  </div>
  <div
    class="flex justify-between items-center pl-5 mb-4 md:w-10/12 mx-auto mt-5"
  >
    <h5
      class="text-xl text-2xl font-bold leading-none text-gray-900 dark:text-white"
    >
      Contact
    </h5>
  </div>
  <div class="w-1/2 pl-5">
    <contact :fields="contact.fields"></contact>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'

  import Modal from '../components/modal.vue'
  import AppTabs from '../components/app-tabs.vue'
  import Contact from '../components/contact.vue'
  import Gallery from '../components/gallery.vue'
  import Swiper from '../components/swiper.vue'

  import { swiperData, galleryData, contactData } from '../utils/constant'

  export default defineComponent({
    components: { AppTabs, Modal, Contact, Gallery, Swiper },
    setup() {
      return {}
    },
    data() {
      return {
        tabList: ['Contact', 'Gallery', 'Swiper'],
        swiper: swiperData,
        gallery: galleryData,
        contact: contactData,
      }
    },
    computed: {
      images(): any {
        return this.gallery.images
      },
    },
    methods: {
      getStringFromJson(json: any) {
        return JSON.stringify(json, undefined, 4)
      },
      syncSwiperConfig() {
        const config = (this.$refs.swiper as any).value
        this.swiper = JSON.parse(config)
      },
      syncGalleryConfig() {
        const config = (this.$refs.gallery as any).value

        this.gallery = JSON.parse(config)
      },
      syncContactConfig() {
        const config = (this.$refs.contact as any).value
        this.contact = JSON.parse(config)
      },
    },
  })
</script>

<style scoped></style>
