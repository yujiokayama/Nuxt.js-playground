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
    data: {
      type: Array,
      default: () => {
        return []
      },
      required: false,
    },
  },
  created() {
    this.fetchTableData()
  },
  mounted() {},
  computed: {
    ...mapGetters({
      tableData: 'components/getTableData',
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
