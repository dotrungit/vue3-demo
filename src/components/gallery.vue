<template>
  <div class="container mx-auto md:w-10/12 p-6" :style="containerStyle">
    <div
      class="rounded-lg break-inside w-full relative cursor-pointer"
      v-for="(item, index) in items"
      :style="itemStyle"
      :key="`image-${index}`"
      @click="preview(item, index)"
    >
      <img class="w-full object-cover" :src="item.src" :alt="item.title" />
      <button
        v-if="index > 0"
        class="bg-white bg-opacity-50 hover:bg-opacity-100 font-bold p-1 rounded absolute bottom-0 left-0"
        @click.stop="changeIndexItemToBack(index)"
      >
        <svg
          class="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </button>
      <button
        v-if="index !== items.length - 1"
        class="bg-white font-bold p-1 rounded absolute bottom-0 right-0 bg-opacity-50 hover:bg-opacity-100"
        @click.stop="changeIndexItemToNext(index)"
      >
        <svg
          class="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </button>
      <button
        class="bg-opacity-50 hover:bg-opacity-100 inline-flex items-center justify-center bg-white rounded-md shadow-lg absolute bottom-0 left-1/2 transform -translate-x-1/2 p-1"
        @click.stop="deleteImage(index)"
      >
        <svg
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
          ></path>
        </svg>
      </button>
    </div>
  </div>

  <LightBox
    :item="previewItem.item"
    :index="previewItem.index"
    :last-index="items.length - 1"
    @changeSrc="changeSrc"
    @close="closePreview"
    @next="next"
    @back="back"
  />
</template>

<script lang="ts">
  import { defineComponent } from 'vue'

  import LightBox from '../components/light-box.vue'

  export default defineComponent({
    name: 'Gallery',
    props: {
      images: {
        type: Array,
        default: () => [],
      },
      gap: {
        type: Number,
        default: 0,
      },
      columns: {
        type: Number,
        default: 0,
      },
    },
    setup() {
      return {}
    },
    components: { LightBox },
    data() {
      return {
        items: this.images as any,
        previewItem: {
          item: {},
          index: -1,
        },
      }
    },
    computed: {
      containerStyle(): object {
        return {
          gap: `${this.gap * 0.25}rem`,
          'column-count': this.columns,
        }
      },
      itemStyle(): object {
        return {
          'margin-bottom': `${this.gap * 0.25}rem`,
        }
      },
    },
    watch: {
      images: {
        handler(val) {
          this.items = val
        },
        deep: true,
      },
    },
    methods: {
      changeIndexItemToNext(index: number) {
        const temp = this.items[index]
        this.items[index] = this.items[index + 1]
        this.items[index + 1] = temp
      },
      changeIndexItemToBack(index: number) {
        const temp = this.items[index]
        this.items[index] = this.items[index - 1]
        this.items[index - 1] = temp
      },
      changeSrc(payload: any) {
        const { src, index } = payload
        this.items[index].src = src
      },
      preview(item: any, index: number) {
        this.previewItem = { item, index }
      },
      next(index: number) {
        this.previewItem = { item: this.items[index - 1], index: index - 1 }
      },
      back(index: number) {
        this.previewItem = { item: this.items[index + 1], index: index + 1 }
      },
      closePreview() {
        this.previewItem = {
          item: {},
          index: -1,
        }
      },
      deleteImage(index: number) {
        this.items.splice(index, 1)
      },
    },
  })
</script>

<style scoped></style>
