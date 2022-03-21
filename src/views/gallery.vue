<template>
  <input v-model="gap" type="number" />
  <div class="container grid grid-cols-3 mx-auto" :class="containerStyle">
    <div
      class="w-full rounded"
      v-for="(item, index) in items"
      :key="`image-${index}`"
    >
      <img :src="item.src" :alt="item.title" />
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'

  const items = [
    {
      src: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80',
      thumbnail:
        'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80',
      title: 'image 1',
    },
    {
      src: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80',
      thumbnail:
        'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80',
      title: 'image 1',
    },
    {
      src: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80',
      thumbnail:
        'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80',
      title: 'image 1',
    },
  ]

  export default defineComponent({
    name: 'Home',
    setup() {
      return {}
    },
    data() {
      return {
        items,
        gap: 5,
        columns: 3,
      }
    },
    computed: {
      containerStyle(): string {
        return 'gap-' + this.gap
      },
    },
  })
</script>

<style scoped></style>
