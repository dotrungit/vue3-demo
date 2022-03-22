<template>
  <div>
    <button
      class="inline-flex justify-center items-center transition font-medium smoothing h-9 text-sm px-3.5 w-1/5 mt-3 rounded rounded-r-none border border-gray-300 text-gray-900 shadow-sm bg-white hover:bg-gray-100 active:bg-gray-200 focus:ring-green-600"
      @click="toggleModal = !toggleModal"
    >
      Open Modal
    </button>
    <div
      v-if="toggleModal"
      class="fixed overflow-x-hidden overflow-y-auto inset-0 z-50"
    >
      <div class="relative mx-auto w-auto max-w-2xl">
        <div class="bg-white w-full rounded shadow-2xl flex flex-col">
          <span
            >Excepteur laboris ad commodo esse et Lorem reprehenderit Lorem
            pariatur quis esse ex adipisicing velit. Veniam excepteur et elit
            nostrud dolore duis et velit duis proident do sunt sit. Non laboris
            mollit dolore ipsum veniam proident fugiat incididunt id. Qui in id
            eiusmod Lorem incididunt. In aliqua occaecat esse qui consectetur
            sint ex veniam consectetur. Anim deserunt ut commodo mollit
            incididunt do non esse irure laboris veniam. Ullamco anim ex et enim
            nulla. Dolore anim dolore consequat excepteur irure. Nostrud velit
            quis dolore ut ad consectetur aliquip. Ea consequat Lorem incididunt
            quis nulla aliqua. Mollit incididunt irure officia ea labore tempor </span
          >|
          <button
            class="inline-flex justify-center items-center transition font-medium smoothing h-9 text-sm px-3.5 w-1/2 rounded rounded-r-none border border-gray-300 text-gray-900 shadow-sm bg-white hover:bg-gray-100 active:bg-gray-200 focus:ring-green-600"
            @click="toggleModal = false"
          >
            Close
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
    setup() {
      return {}
    },
    data() {
      return {
        toggleModal: false,
      }
    },
    methods: {},
  })
</script>

<style scoped></style>
