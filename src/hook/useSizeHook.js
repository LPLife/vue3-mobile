import { reactive, ref } from 'vue';
/**
 * 监听页面窗口大小，重新reload自适应布局
 * @returns Object
 */
export default function useSizeHook() {
  const state = reactive({
    screenWidth: window.innerWidth,
    screenHeight: window.innerHeight,
  });
  // 控制组件不刷新实现重新自适应
  let showWrap = ref(true);
  const handleResize = () => {
    state.screenWidth = window.innerWidth;
    state.screenHeight = window.innerHeight;
    // 在这里触发重新绘制自适应的操作
    showWrap.value = false;
    Promise.resolve().then(() => {
      showWrap.value = true;
    });
  };
  const addEventListenerResize = () => {
    window.addEventListener('resize', handleResize);
  };
  const removeEventListenerResize = () => {
    window.addEventListener('resize', handleResize);
  };
  return {
    showWrap,
    addEventListenerResize,
    removeEventListenerResize,
  };
}
