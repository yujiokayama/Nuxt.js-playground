<template>
  <div class="flex flex-col items-center">
    <nav>
      <nuxt-link to="/"><Logo /></nuxt-link>
    </nav>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    data: {
      type: String,
      default: '',
      required: false,
    },
  },
  created() {},
  mounted() {},
  computed: {},
  methods: {},
})
</script>

<style lang="scss" scoped></style>
