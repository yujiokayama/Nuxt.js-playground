<template>
  <div class="max-w-4xl mt-10 mx-auto px-5">
    <component :is="matchComponents" />
    <Graph />
  </div>
</template>

<script>
import Vue from 'vue'
import Form from '~/components/examples/form/Form.vue'
import Table from '~/components/examples//table/Table.vue'
// import { Context } from '@nuxt/types'

export default Vue.extend({
  components: {
    Form,
    Table,
  },
  data() {
    return {
      components: ['Table', 'Form'],
    }
  },
  async asyncData({ route }) {
    return {
      routeParams: route.params,
    }
  },
  created() {},
  mounted() {},
  computed: {
    matchComponents() {
      return (
        this.routeParams.component.charAt(0).toUpperCase() +
        this.routeParams.component.slice(1)
      )
    },
    toUpperCamel() {
      return function (str, upper) {
        if (!str) return str

        const strs = str.split(/[-_ ]+/),
          i = 1,
          len = strs.length

        if (len <= 1) return str

        if (upper) {
          i = 0
          str = ''
        } else {
          str = strs[0].toLowerCase()
        }

        for (; i < len; i++) {
          str += strs[i].toLowerCase().replace(/^[a-z]/, function (value) {
            return value.toUpperCase()
          })
        }

        return str
      }
    },
  },
})
</script>

<style lang="scss" scoped></style>
