<template>
  <div>
    <button
      v-if="showButtonModal"
      :class="styleButton"
      @click="toggleModal = !toggleModal"
    >
      {{ textButton }}
      <svg
        class="w-4 h-4 ml-2"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
          clip-rule="evenodd"
        ></path>
      </svg>
      <slot name="button"></slot>
    </button>
    <div
      v-if="toggleModal"
      class="fixed overflow-x-hidden h-full inset-0 z-50 top-20"
    >
      <div class="relative mx-auto w-auto max-w-2xl">
        <div class="bg-white w-full h-full rounded shadow-2xl flex flex-col">
          <slot></slot>
          <button
            class="absolute top-0 right-0 inline-flex justify-center items-center font-medium smoothing h-9 text-sm px-3.5 rounded rounded-r-none text-gray-900 shadow-sm"
            @click="close"
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
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
    <div
      v-if="toggleModal"
      class="absolute inset-0 z-40 opacity-25 bg-black"
    ></div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'

  export default defineComponent({
    props: {
      textButton: {
        type: String,
        default: 'Modal',
      },
      styleButton: {
        type: String,
        default:
          'inline-flex justify-center items-center transition font-medium smoothing h-9 text-sm px-10 rounded border border-gray-300 text-gray-900 shadow-sm bg-white hover:bg-gray-100  focus:ring-green-600',
      },
      show: {
        type: Boolean,
        default: false,
      },
      showButtonModal: {
        type: Boolean,
        default: true,
      },
    },
    setup() {
      return {}
    },
    data() {
      return {
        toggleModal: false,
      }
    },
    watch: {
      show(val) {
        this.toggleModal = val
      },
    },
    methods: {
      close() {
        this.$emit('close')
        this.toggleModal = false
      },
    },
  })
</script>

<style scoped></style>
