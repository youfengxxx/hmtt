<template>
  <van-field
    v-model.trim="message"
    rows="2"
    autosize
    type="textarea"
    maxlength="50"
    placeholder="请输入留言"
    show-word-limit
    class="add-field"
    ref="field"
  >
    <template #extra>
      <van-button
        type="default"
        :disabled="message.length === 0"
        class="btn"
        @click="onClick"
        >发布</van-button
      >
    </template>
  </van-field>
</template>

<script>
import { addComment } from '@/api/comment'
export default {
  props: {
    target: {
      type: [Number, String],
      required: true
    }
  },
  created () { },
  mounted () {
    this.$refs.field.$el.querySelector('textarea').focus()
  },
  data () {
    return {
      message: ''
    }
  },
  methods: {
    async onClick () {
      try {
        const res = await addComment({
          target: this.target,
          content: this.message
        })
        console.log(res)
        this.$emit('add-comment', res.data.data.new_obj)
      } catch (err) {
        console.log(err)
      }
    }
  },
  computed: {},
  watch: {},
  filters: {},
  components: {}
}
</script>

<style scoped lang='less'>
.add-field {
  align-items: center;
  button {
    border: none;
  }
}
</style>
