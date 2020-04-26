import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './plugins';
import http from './plugins/axios';
import i18n from './i18n';
import filter from './filters';
import 'normalize.css';
import '@/styles/index.js';
import './utils/getFirstScreen';

Vue.config.productionTip = false;
Vue.prototype.$http = http;
Vue.filter('format', filter);

new Vue({
	router,
	store,
	i18n,
	render: (h) => h(App)
}).$mount('#app');
