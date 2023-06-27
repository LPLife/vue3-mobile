import { createApp } from 'vue';

import * as echarts from 'echarts';
import App from './App.vue';
import pinia from './stores';
import router from './router';
import './utils/rem';
import 'vant/lib/index.css';
import './styles/main.scss';

import 'virtual:svg-icons-register';

const app = createApp(App);

app.use(pinia);
app.use(router);

app.config.globalProperties.$echarts = echarts;

app.mount('#app');
