<template>
  <div>
    <van-nav-bar title="登录" @click-left="$router.back()">
      <van-icon name="cross" slot="left" />
    </van-nav-bar>
    <van-form @submit="onSubmit" ref="form">
      <van-field
        v-model.trim="mobile"
        name="mobile"
        placeholder="请输入手机号"
        :rules="[
          { required: true, message: '请输入手机号' },
          { pattern: /^(?:(?:\+|00)86)?1\d{10}$/, message: '不符合手机格式' },
        ]"
      >
        <i class="toutiao toutiao-shouji" slot="left-icon"></i
      ></van-field>
      <van-field
        v-model.trim="code"
        type="password"
        name="code"
        placeholder="请输入验证码"
        :rules="[
          { required: true, message: '请输入验证码' },
          { pattern: /^\d{6}$/, message: '验证码长度必须是6位' },
        ]"
      >
        <i class="toutiao toutiao-yanzhengma" slot="left-icon"></i>
        <template #button>
          <van-count-down
            v-if="isCountDownShow"
            format="ss s"
            :time="time"
            @finish="isCountDownShow = false"
          />
          <van-button
            v-else
            @click="sendSms"
            size="small"
            class="yanzhengma"
            native-type="button"
            >发送验证码</van-button
          >
        </template>
      </van-field>
      <div style="margin: 16px">
        <van-button round block native-type="submit" class="login"
          >提交</van-button
        >
      </div>
    </van-form>
  </div>
</template>

<script>
import { getSmsCode, login } from '@/api/user'

export default {
  created () { },
  data () {
    return {
      mobile: '15058199807', // 手机号
      code: '246810', // 短信验证码
      time: 5 * 1000,
      isCountDownShow: false// 默认不显示倒计时效果
    }
  },
  methods: {
    async onSubmit (values) {
      try {
        const res = await login(values)
        console.log(res)
        this.$store.commit('setUser', res.data.data)
        this.$router.push({ name: 'my' })
      } catch (err) {
        console.log(err)
      }
    },
    async sendSms () {
      try {
        await this.$refs.form.validate('mobile')
        this.isCountDownShow = true// 显示倒计时
        try {
          await getSmsCode(this.mobile)
          this.$toast.success('发送成功')
        } catch (err) {
          console.log(err)
          this.$toast.fail('发送失败，请重试')
        }
      } catch (err) {
        console.log(err)
        console.log('校验失败！')
        this.$toast.fail('手机号格式不正确')
      }
    }
  },

  computed: {},
  watch: {},
  filters: {},
  components: {}
}
</script>

<style scoped lang="less">
.van-icon {
  font-size: 40px;
}
.toutiao {
  font-size: 37px;
}
.yanzhengma {
  width: 152px;
  height: 46px;
  font-size: 22px;
  background-color: #ededed;
  border-radius: 23px;
  color: #666;
  .van-button__text {
    zoom: 0.96;
  }
}
.login {
  width: 694px;
  height: 88px;
  background-color: #59ca17;
  border-radius: 44px;
  font-size: 30px;
  color: #fff;
}
.van-count-down {
  position: fixed;
  right: 18px;
}
.yanzhengma {
  position: fixed;
  right: 18px;
}
</style>
