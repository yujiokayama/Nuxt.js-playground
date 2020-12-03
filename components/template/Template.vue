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
      default: 'テキスト',
      required: false,
    },
  },
  created() {},
  mounted() {
    console.log(process.env.API_KEY)
  },
  computed: {},
  methods: {},
})
</script>

<style lang="scss" scoped></style>
