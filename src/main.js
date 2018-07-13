// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import axios from './api/config'
import axios from 'axios'
// import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import testDialog from 'dkui'
// import testDialog from './lib/index.js'
// Vue.use(dialogTwo)

// Vue.use(ElementUI);
import { Radio,Switch } from 'element-ui';
import store from './store';
Vue.use(testDialog)
Vue.use(Radio)
Vue.use(Switch)

Vue.config.productionTip = false
Vue.prototype.$axios=axios;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
