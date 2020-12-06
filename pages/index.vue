<template>
  <div>
    <Card />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Logo from '~/components/Logo.vue'
import Card from '~/components/Card.vue'

export default Vue.extend({
  components: {
    Logo,
    Card,
  },
  data() {
    return {}
  },
  created() {},
  mounted() {},
})
</script>

<style lang="scss" scoped></style>
