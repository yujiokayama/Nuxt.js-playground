<template>
  <!-- This is an example component -->

  <div class="max-w-4xl mt-10 mx-auto px-5">
    <div class="flex justify-between items-center">
      <div class="bg-white mr-5">
        <div class="p-5">
          <h1 class="text-2xl font-bold text-green-800 py-2">
            Lorem ipsum dolor sit amet
          </h1>
          <a
            href=""
            class="py-2 px-3 mt-4 px-6 text-white bg-green-500 inline-block rounded"
            >Read More</a
          >
        </div>
      </div>

      <div class="bg-white mr-5">
        <div class="p-5">
          <h1 class="text-2xl font-bold text-green-800 py-2">
            Lorem ipsum dolor sit amet
          </h1>
          <a
            href=""
            class="py-2 px-3 mt-4 px-6 text-white bg-green-500 inline-block rounded"
            >Read More</a
          >
        </div>
      </div>

      <div class="bg-white mr-5">
        <div class="p-5">
          <h1 class="text-2xl font-bold text-green-800 py-2">
            Lorem ipsum dolor sit amet
          </h1>
          <a
            href=""
            class="py-2 px-3 mt-4 px-6 text-white bg-green-500 inline-block rounded"
            >Read More</a
          >
        </div>
      </div>



    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    components: {
      type: Array,
      default: () => [],
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
