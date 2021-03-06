import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant'
import 'vant/lib/index.less'
import 'amfe-flexible'
// import '@/style/icon.less'
import MyIcon from '@/components/MyIcon.vue'
// import '@/style/reset.less'
import '@/style/index.less'
import FollowUser from '@/components/FollowUser.vue'

import * as obj from '@/filters'
import '@/components'
Object.keys(obj).forEach(key => {
  Vue.filter(key, obj[key])
})
Vue.component(FollowUser.name, FollowUser)
Vue.component('MyIcon', MyIcon)
Vue.use(Vant)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
