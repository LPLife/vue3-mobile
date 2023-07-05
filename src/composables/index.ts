import { sendMobileCode } from '@/services/user';
import type { CodeType } from '@/types/user';
import { type FormInstance, showToast } from 'vant';
import type { Ref } from 'vue';
import { onUnmounted } from 'vue';
import { ref } from 'vue';

// 发送短信验证码
export const useMobileCode = (mobile: Ref<string>, type: CodeType = 'login') => {
  const time = ref(0);
  const form = ref<FormInstance>();
  let timer: number;
  const onSend = async () => {
    // 验证：倒计时 手机号
    if (time.value > 0) return;
    await form.value?.validate('mobile');
    await sendMobileCode(mobile.value, type);
    showToast('发送成功');
    time.value = 60;
    // 开启倒计时
    if (timer) clearInterval(timer);
    timer = window.setInterval(() => {
      time.value--;
      if (time.value <= 0) clearInterval(timer);
    }, 1000);
  };

  onUnmounted(() => {
    clearInterval(timer);
  });

  return { onSend, time, form };
};
