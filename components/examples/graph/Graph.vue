<template>
  <div></div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  props: {
    test: {
      type: Array,
      default: () => {
        return []
      },
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
