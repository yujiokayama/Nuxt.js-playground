<template>
  <div>
    {{ test }}
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    test: {
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
