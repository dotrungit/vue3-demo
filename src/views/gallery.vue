<template>
  <div class="mb-4 mt-2 container mx-auto">
    <label class="block text-gray-700 text-sm font-bold mb-2" for="Column">
      Columns
    </label>
    <input
      class="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      id="Column"
      v-model="columns"
      type="number"
      placeholder="Column"
    />
  </div>
  <div class="mb-4 container mx-auto">
    <label class="block text-gray-700 text-sm font-bold mb-2" for="Gap">
      Gap
    </label>
    <input
      class="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      id="Gap"
      v-model="gap"
      type="number"
      placeholder="Gap"
    />
  </div>
  <div class="mb-4 container mx-auto">
    <button
      v-if="!creating"
      class="bg-blue-400 hover:bg-blue-700 text-white font-bold px-2 py-1 rounded"
      @click="creating = true"
    >
      Add Image
    </button>
    <div v-if="creating" class="flex">
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
        class="bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 ml-2 rounded focus:outline-none focus:shadow-outline"
        type="button"
        @click.stop="addNew"
      >
        OK
      </button>
    </div>
  </div>

  <div class="container mx-auto" :style="containerStyle">
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
        class="bg-blue-400 hover:bg-blue-700 text-white font-bold p-1 rounded absolute bottom-0 left-0"
        @click.stop="changeIndexItemToBack(index)"
      >
        {{ '<<' }}
      </button>
      <button
        v-if="index !== items.length - 1"
        class="bg-blue-400 hover:bg-blue-700 text-white font-bold p-1 rounded absolute bottom-0 right-0"
        @click.stop="changeIndexItemToNext(index)"
      >
        {{ '>>' }}
      </button>
      <button
        class="bg-blue-400 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded absolute top-0 right-0"
        @click.stop="deleteImage(index)"
      >
        {{ 'x' }}
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

  const initItems = [
    {
      src: 'https://www.english-efl.com/wp-content/uploads/2019/12/test.jpg',
      thumbnail:
        'https://www.english-efl.com/wp-content/uploads/2019/12/test.jpg',
      title: 'image 1',
    },
    {
      src: 'https://mondaycareer.com/wp-content/uploads/2020/10/Test-keyboard.jpg',
      thumbnail:
        'https://mondaycareer.com/wp-content/uploads/2020/10/Test-keyboard.jpg',
      title: 'image 1',
    },
    {
      src: 'https://www.qquest.nl/wp-content/uploads/2019/09/Testen.jpg',
      thumbnail: 'https://www.qquest.nl/wp-content/uploads/2019/09/Testen.jpg',
      title: 'image 1',
    },
    {
      src: 'https://wow.olympus.eu/webfile/img/1632/oly_testwow_stage.jpg?x=1024',
      thumbnail:
        'https://wow.olympus.eu/webfile/img/1632/oly_testwow_stage.jpg?x=1024',
      title: 'image 1',
    },
    {
      src: 'https://www.theedadvocate.org/wp-content/uploads/2016/02/board-361516_960_720.jpg',
      thumbnail:
        'https://www.theedadvocate.org/wp-content/uploads/2016/02/board-361516_960_720.jpg',
      title: 'image 1',
    },
    {
      src: 'https://ileadsantaclarita.org/wp-content/uploads/2017/08/bigstock-147279827.jpg',
      thumbnail:
        'https://ileadsantaclarita.org/wp-content/uploads/2017/08/bigstock-147279827.jpg',
      title: 'image 1',
    },
  ]

  export default defineComponent({
    name: 'Gallery',
    setup() {
      return {}
    },
    components: { LightBox },
    data() {
      return {
        items: JSON.parse(JSON.stringify(initItems)),
        gap: 5,
        columns: 3,
        previewItem: {
          item: {},
          index: -1,
        },
        creating: false,
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
      addNew() {
        const newSrc = (this.$refs.new as any).value
        const newTitle = (this.$refs.title as any).value
        this.items.push({
          src: newSrc,
          thumbnail: newSrc,
          title: newTitle,
        })

        this.creating = false
      },
      deleteImage(index: number) {
        this.items.splice(index, 1)
      },
    },
  })
</script>

<style scoped></style>
