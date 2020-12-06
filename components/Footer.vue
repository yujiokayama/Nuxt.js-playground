<template>
  <footer class="bg-gray-900">
    <p class="p-3 text-center text-xs text-white">
      Copyright © {{ setYear }} Nuxt.js PLAY GROUND All Rights Reserved.
    </p>
  </footer>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  created() {},
  mounted() {},
  computed: {
    setYear: () => {
      return new Date().getFullYear()
    },
  },
  methods: {},
})
</script>

<style lang="scss" scoped></style>
