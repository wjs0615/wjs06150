import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false;


//导入axios的基本信息配置
import axios from "./utils/request";
Vue.prototype.$axios = axios;

//配置elementUI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);

//配置vantUI的依赖
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);
import { Lazyload } from 'vant';
Vue.use(Lazyload);

//全局过滤器
Vue.filter('reverse',function(val){
  return val.split("").reverse().join("");
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
