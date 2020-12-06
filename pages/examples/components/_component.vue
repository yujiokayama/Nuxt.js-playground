<template>
  <div>
    {{ routeParams }}
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Table from '~/components/examples/table/Table.vue'
import { Context } from '@nuxt/types'

export default Vue.extend({
  components: {
    Table,
  },
  data() {
    return {}
  },
  async asyncData({ route }: Context) {
    return {
      routeParams: route.params,
    }
  },
  created() {},
  mounted() {},
})
</script>

<style lang="scss" scoped></style>
