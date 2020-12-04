<template>
  <div>
    {{ tableData }}
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapGetters, mapActions } from 'vuex'

export default Vue.extend({
  props: {
    tableData: {
      type: Array,
      default: [],
      required: false,
    },
  },
  created() {},
  mounted() {
    this.fetchTableData()
  },
  computed: {
    ...mapGetters({
      tableData: '/components/getTableData',
    }),
  },
  methods: {
    ...mapActions({
      fetchTableData: 'components/fetchTableData',
    }),
    getEvent() {},
  },
})
</script>

<style lang="scss" scoped></style>
