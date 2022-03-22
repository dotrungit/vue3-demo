<template>
  <div class="wrapper">
    <input type="range" min="0" max="20" step="5" v-model="value" />
    <span v-text="total"></span>
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
        value: 50,
      }
    },
    computed: {
      total(): number {
        return this.value * 10
      },
    },
  })
</script>
