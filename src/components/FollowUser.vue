<template>
  <div>
    <van-button
      :disabled="isAjax"
      :loading="isAjax"
      class="follow-btn"
      type="info"
      color="#3296fa"
      round
      size="small"
      :icon="value ? '' : 'plus'"
      :plain="value"
      @click="onclick"
      >{{ value ? "已关注" : "关注" }}</van-button
    >
  </div>
</template>

<script>
import { delUser, addUser } from '@/api/article'
export default {
  name: 'FollowUser',
  props: {
    value: {
      type: Boolean,
      required: true
    },
    target: {
      type: [Number, String],
      required: true
    }
  },
  created () { },
  data () {
    return {
      isAjax: false
    }
  },
  methods: {
    async onclick () {
      this.isAjax = true
      if (this.value) {
        try {
          await delUser(this.target)
          this.$emit('input', !this.value)
        } catch (err) {
          console.log(err)
        }
      } else {
        try {
          await addUser(this.target)
          this.$emit('input', !this.value)
        } catch (err) {
          console.log(err)
        }
      }
      this.isAjax = false
    }
  },
  computed: {},
  watch: {},
  filters: {},
  components: {}
}
</script>

<style scoped lang='less'>
.follow-btn {
  width: 170px;
  height: 58px;
}
</style>
