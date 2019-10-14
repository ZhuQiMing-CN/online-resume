import Vue from 'vue';
import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
import '../theme/index.css'; // #00C091
import App from './App.vue';
import router from './router';
import store from './store';
import './assets/css/css.less';

Vue.use(ElementUI);

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
