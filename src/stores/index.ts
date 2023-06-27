// 1. 创建pinia实例
// 2. 使用pinia插件

import { createPinia } from 'pinia';
import persistedState from 'pinia-plugin-persistedstate';

const pinia = createPinia();
pinia.use(persistedState);

export default pinia;

// import { useUserStore } from './modules/user'
// export { useUserStore }
export * from './modules/user';
export * from './modules/consult';
