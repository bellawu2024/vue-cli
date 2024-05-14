import './plugins'
import './register-components'

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import i18n from './i18n'
import { apolloProvider } from './vue-apollo'
import ClientAddonApi from './util/ClientAddonApi'
import gql from 'graphql-tag'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css



window.gql = gql
Vue.use(ElementUI);
Vue.config.productionTip = false
Vue.config.devtools = true

// For client addons
window.Vue = Vue
window.ClientAddonApi = new ClientAddonApi()

const app = new Vue({
  router,
  apolloProvider,
  i18n,
  ...App
})

app.$mount('#app')
