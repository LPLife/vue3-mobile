<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue';
import useSizeHook from '@/hook/useSizeHook';
const { addEventListenerResize, removeEventListenerResize, showWrap } = useSizeHook();
onMounted(() => {
  addEventListenerResize();
});
onUnmounted(() => {
  removeEventListenerResize();
});
</script>

<template>
  <div v-if="showWrap">
    <!-- 路由出口-一级路由 -->
    <router-view></router-view>
  </div>
</template>

<style lang="scss" scoped></style>
