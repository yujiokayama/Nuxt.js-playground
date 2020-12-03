<template>
  <div>
    <Template />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Template from '~/components/template/Template.vue'

export default Vue.extend({
  components: {
    Template,
  },
  data() {
    return {
      age: 0,
    }
  },
  created() {
    this.age = this.$accessor.age.age
  },
})
</script>

<style lang="scss" scoped></style>
