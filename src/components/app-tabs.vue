<template>
  <div
    :class="{
      'flex space-x-4': variant === 'horizontal',
    }"
  >
    <ul
      class="list-none bg-blue-900 bg-opacity-30 p-1.5 rounded-lg text-center overflow-auto whitespace-nowrap"
      :class="{
        'flex items-center mb-6': variant === 'vertical',
      }"
    >
      <li
        v-for="(tab, index) in tabList"
        :key="index"
        class="w-full px-4 py-1.5 rounded-lg"
        :class="{
          'text-blue-600 bg-white shadow-xl': index + 1 === activeTab,
          'text-white': index + 1 !== activeTab,
        }"
      >
        <label
          :for="`${tab}${index}`"
          v-text="tab"
          class="cursor-pointer block font-bold"
        />
        <input
          :id="`${tab}${index}`"
          type="radio"
          :name="`${tab}-tab`"
          :value="index + 1"
          v-model="activeTab"
          class="hidden"
        />
      </li>
    </ul>
    <template v-for="(tab, index) in tabList">
      <div
        :key="index"
        v-if="index + 1 === activeTab"
        class="flex-grow bg-white rounded-lg shadow-xl p-4 h-2/3"
      >
        <slot :name="`tabPanel-${index + 1}`" />
      </div>
    </template>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'

  export default defineComponent({
    setup() {
      return {}
    },
    props: {
      tabList: {
        type: Array,
        default: () => [],
      },
      variant: {
        type: String,
        default: 'vertical',
      },
    },
    data() {
      return {
        activeTab: 1,
      }
    },
  })
</script>

<style scoped></style>
