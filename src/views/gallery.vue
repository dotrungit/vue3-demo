<template>
  <div class="container mx-auto md:w-10/12 p-6">
    <div class="flex justify-between items-center mb-4">
      <h5 class="text-xl font-bold leading-none text-gray-900 dark:text-white">
        Configs Gallery
      </h5>
    </div>
    <div class="container mx-auto flex flex-wrap align-middle mt-5">
      <div class="md:mb-0 relative">
        <label
          class="block uppercase tracking-wide text-gray-700 text-xs font-bold"
        >
          Space between slides:
        </label>
      </div>
      <input type="range" class="ml-5" min="0" max="5" step="1" v-model="gap" />
      <span class="text-xs ml-3">{{ gap }}</span>
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
        v-model="columns"
      />
      <span class="text-xs ml-3">{{ columns }}</span>
    </div>
    <div class="mb-4 container mx-auto">
      <button
        v-if="!creating"
        class="mt-5 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
        @click="creating = true"
      >
        Add Image
      </button>
      <div v-if="creating" class="flex mt-5">
        <input
          ref="title"
          class="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="Title"
        />
        <input
          ref="new"
          class="shadow appearance-none border rounded ml-2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="Src"
        />
        <button
          class="bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-4 ml-2 rounded focus:outline-none focus:shadow-outline"
          type="button"
          @click.stop="addNew"
        >
          OK
        </button>
      </div>
    </div>
  </div>
  <gallery :images="images" :gap="gap" :columns="columns"></gallery>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import Gallery from '../components/gallery.vue'
  import { galleryData } from '../utils/constant'

  export default defineComponent({
    components: {
      Gallery,
    },
    setup() {
      return {}
    },
    data() {
      return {
        images: galleryData.images,
        gap: 5,
        columns: 3,
        creating: false,
      }
    },
    methods: {
      addNew() {
        const newSrc = (this.$refs.new as any).value
        const newTitle = (this.$refs.title as any).value
        this.images.push({
          src: newSrc,
          thumbnail: newSrc,
          title: newTitle,
        })

        this.creating = false
      },
    },
  })
</script>

<style scoped></style>
