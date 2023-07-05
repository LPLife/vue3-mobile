import { useUserStore } from '@/stores';
import { createRouter, createWebHistory } from 'vue-router';

import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

NProgress.configure({
  showSpinner: false,
});

// 如何得到路由实例 createRouter()
// 如何设置路由模式 history
// history 模式 createWebHistory()
// hash 模式 createWebHashHistory()
const router = createRouter({
  // history: createWebHistory(import.meta.env.BASE_URL),
  // 默认参数 '/' 路由的基础路由
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      component: () => import('@/views/Login/index.vue'),
      meta: { title: '登录' },
    },
    {
      path: '/login/callback',
      component: () => import('@/views/Login/LoginCallback.vue'),
      meta: { title: '三方登录' },
    },
    {
      path: '/hello',
      component: () => import('@/views/Hello/index.vue'),
      meta: { title: '个人中心' },
    },
    {
      path: '/',
      redirect: '/hello',
      component: () => import('@/views/Layout/index.vue'),
      children: [
        {
          path: '/test',
          component: () => import('@/views/Test/index.vue'),
          meta: { title: '测试' },
        },
        {
          path: '/demo',
          component: () => import('@/views/Demo/index.vue'),
          meta: { title: '个人中心' },
        },
        {
          path: '/hello',
          component: () => import('@/views/Hello/index.vue'),
          meta: { title: '个人中心' },
        },
      ],
    },
  ],
});

// 全局的前置导航守卫
router.beforeEach((to) => {
  NProgress.start();
  // 获取 token 的
  const store = useUserStore();
  // 白名单
  const wihteList = ['/login', '/login/callback', '/test', '/demo'];
  // 如果你没有token并且不在白名单里面，重定向到登录
  if (!store.user?.token && !wihteList.includes(to.path)) return '/login';
});

// 全局的后置导航
router.afterEach((to) => {
  document.title = `${to.meta.title || ''}-${import.meta.env.VITE_APP_TITLE}`;
  NProgress.done();
});

export default router;
