import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './gloabl/index'
import './dialog/directives';
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import api from './http/api'

Vue.use(ViewUI);
Vue.use(ElementUI);
Vue.prototype.$api = api

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')