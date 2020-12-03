<template>
  <div>
    vue
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
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
