<template>
  <div class="lb" v-if="index > -1">
    <div class="lb-modal">
      <button
        class="lb-modal-close bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        @click="close"
      >
        close
      </button>
      <button
        v-if="showPrev"
        class="lb-modal-prev bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        @click.stop="prev"
      >
        prev
      </button>
      <button
        v-if="showNext"
        class="lb-modal-next bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        @click.stop="next"
      >
        next
      </button>

      <div class="lb-modal-img">
        <div>
          <label class="block text-white text-sm font-bold mb-2">
            Src Image
          </label>
          <div class="flex mb-4">
            <input
              :value="item.src"
              ref="src"
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Src image"
            />
            <button
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 ml-2 rounded focus:outline-none focus:shadow-outline"
              type="button"
              @click.stop="changeSrc"
            >
              Change
            </button>
          </div>
        </div>

        <img :src="srcImage" class="img mx-auto my-auto object-center" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'

  export default defineComponent({
    setup() {
      return {}
    },
    props: {
      item: {
        type: Object,
        default: () => ({}),
      },
      index: {
        type: Number,
        default: -1,
      },
      lastIndex: {
        type: Number,
        default: -1,
      },
    },
    data() {
      return {
        loading: false,
        events: [],
      }
    },
    computed: {
      srcImage() {
        return this.item.src || ''
      },
      showPrev() {
        return this.index > 0
      },
      showNext() {
        return this.index < this.lastIndex
      },
    },
    methods: {
      changeSrc() {
        const ref = this.$refs.src as any
        this.$emit('changeSrc', { src: ref.value, index: this.index })
      },
      next() {
        this.$emit('back', this.index)
      },
      prev() {
        this.$emit('next', this.index)
      },
      close() {
        this.$emit('close')
      },
    },
  })
</script>

<style scoped>
  .lb-modal {
    transition: opacity 0.2s ease;
    position: fixed;
    z-index: 99999;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    min-height: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.8);
    display: block;
    user-select: none;
  }

  .lb-modal-close {
    position: absolute;
    right: 20px;
    top: 20px;
    color: #fff;
  }

  .lb-modal-next,
  .lb-modal-prev {
    position: absolute;
    top: 50%;
    left: 20px;
    margin-top: -25px;
    z-index: 999;
    cursor: pointer;
    color: #fff;
    background-color: transparent;
    border: none;
  }

  .lb-modal-next {
    left: auto;
    right: 20px;
  }

  .lb-modal-img {
    position: absolute;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
  }

  .lb-modal-img .spinner {
    width: 150px;
    position: absolute;
    margin-left: -75px;
    top: 50%;
    left: 50%;
    z-index: 1;
  }
</style>
