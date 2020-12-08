<template>
  <div>
    <Chart />
  </div>
</template>

<script>
import Vue from 'vue'
import { Chart } from 'highcharts-vue'

export default Vue.extend({
  components: {
    Chart,
  },
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
