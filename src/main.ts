import { createApp } from 'vue';
import eruda from 'eruda';
import EChartsDirective from '@/plugins/echarts';

import App from './App.vue';
import pinia from '@/stores';
import router from '@/router';
import '@/utils/rem';
import 'vant/lib/index.css';
import '@/styles/main.scss';
import 'virtual:svg-icons-register';
import { registerThousandSeparatorDirective } from '@/directives';
// 只在开发环境中使用 Eruda
if (process.env.NODE_ENV === 'development') {
  eruda.init();
}
const app = createApp(App);
// 注册全部的自定义指令
registerThousandSeparatorDirective(app);
app.use(pinia);
app.use(router);
app.use(EChartsDirective);
app.mount('#app');
