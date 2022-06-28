<template>
  <div>
    <i class="toutiao" :class="'toutiao' + name"></i>
  </div>
</template>

<script>
export default {
  created () { },
  data () {
    return {
      props: {
        name: {
          type: String,
          required: true
        }
      }
    }
  },
  methods: {},
  computed: {},
  watch: {},
  filters: {},
  components: {}
}
</script>

<style scoped>
</style>
