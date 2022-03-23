<template>
  <div class="container mx-auto">
    <modal text-button="Setting" class="container mx-auto mb-6">
      <h1 class="text-xl font-bold mb-4 mt-3 mx-auto">Configs Products</h1>
      <div class="card p-6">
        <div class="container mx-auto flex flex-wrap align-middle">
          <textarea
            :value="getStringFromJson(products)"
            ref="product"
            class="resize rounded border w-full h-full p-3"
            cols="50"
            rows="25"
            spellcheck="false"
          ></textarea>
        </div>
        <div class="mb-4 container mx-auto mt-4">
          <button
            class="bg-blue-400 hover:bg-blue-700 text-white font-bold px-2 py-1 rounded"
            @click="syncConfig"
          >
            Sync
          </button>
        </div>
      </div>
    </modal>
  </div>
  <div tabindex="0" class="focus:outline-none">
    <!-- Remove py-8 -->
    <div class="mx-auto container py-8">
      <div class="flex flex-wrap items-center">
        <!-- Card 1 -->
        <div
          v-for="(product, index) in products.products"
          :key="`product-${index}`"
          tabindex="0"
          class="focus:outline-none mx-2 w-72 xl:mb-0 mb-8 cursor-pointer"
        >
          <div>
            <img
              alt="person capturing an image"
              :src="product.image"
              tabindex="0"
              class="focus:outline-none w-full h-44"
            />
          </div>
          <div class="bg-white">
            <div class="flex items-center justify-between px-4 pt-4">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  tabindex="0"
                  class="focus:outline-none"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#2c3e50"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path
                    d="M9 4h6a2 2 0 0 1 2 2v14l-5-3l-5 3v-14a2 2 0 0 1 2 -2"
                  ></path>
                </svg>
              </div>
              <div
                v-if="product.favorite"
                class="bg-yellow-200 py-1.5 px-6 rounded-full"
              >
                <p
                  tabindex="0"
                  class="focus:outline-none text-xs text-yellow-700"
                >
                  Featured
                </p>
              </div>
            </div>
            <div class="p-4">
              <div
                class="flex justify-between items-center"
                :class="titleColor"
              >
                <h2
                  tabindex="0"
                  class="cursor-pointer focus:outline-none text-lg font-semibold"
                >
                  {{ product.name }}
                </h2>
                <p
                  tabindex="0"
                  class="focus:outline-none text-xs text-gray-600 pl-5"
                >
                  {{ product.time }}
                </p>
                <p
                  tabindex="0"
                  class="focus:outline-none text-lg font-bold text-gray-600 pl-5"
                >
                  {{ product.price }}$
                </p>
              </div>
              <p
                tabindex="0"
                class="focus:outline-none text-xs text-gray-600 mt-2"
              >
                {{ product.description }}
              </p>
              <div class="flex mt-4">
                <div v-for="(tag, i) in product.tags" :key="`tag-${i}`">
                  <p
                    tabindex="0"
                    class="mr-2 focus:outline-none text-xs text-gray-600 px-2 bg-gray-200 py-1"
                  >
                    {{ tag }}
                  </p>
                </div>
              </div>
              <div class="flex items-center justify-between py-4">
                <h2
                  tabindex="0"
                  class="focus:outline-none text-indigo-700 text-xs font-semibold"
                >
                  {{ product.address }}
                </h2>
                <h3
                  tabindex="0"
                  class="focus:outline-none text-indigo-700 text-xl font-semibold"
                ></h3>
              </div>
            </div>
          </div>
        </div>
        <!-- Card 1 Ends -->
      </div>
    </div>
    <!--- more free and premium Tailwind CSS components at https://tailwinduikit.com/ --->
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import { productData } from '../utils/constant'

  import Modal from '../components/modal.vue'

  export default defineComponent({
    setup() {
      return {}
    },
    components: { Modal },
    data() {
      return {
        productData,
        products: productData as any,
      }
    },
    computed: {
      titleColor() {
        const configs = this.products.configs as any
        return `text-${configs.titleColor}`
      },
    },
    methods: {
      getStringFromJson(json: any) {
        return JSON.stringify(json, undefined, 4)
      },
      syncConfig() {
        const config = (this.$refs.product as any).value
        this.products = JSON.parse(config)
      },
    },
  })
</script>

<style scoped></style>
