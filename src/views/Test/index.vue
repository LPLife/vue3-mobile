<template>
  <div class="test-page">
    <div v-thousand-separator:1="numberData"></div>
    <div v-thousand-separator:2="1000.111"></div>
    <div v-echarts="options" style="width: 60vw; height: 50vh"></div>
  </div>
</template>

<script setup lang="ts">
import { getItemList } from '@/services/test';

import { onMounted, onUnmounted, reactive, ref } from 'vue';
const numberData = ref(1000.1); //
const options = reactive({
  tooltip: {},
  xAxis: {
    data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'],
  },
  yAxis: {},
  series: [
    {
      name: '销量',
      type: 'bar',
      data: [5, 20, 36, 10, 10, 20, 20, 36, 10, 10, 20],
    },
  ],
});
onMounted(async () => {
  let res = await getItemList();
  console.log('🚀 ~ file: index.vue:30 ~ onMounted ~ res:', res);
});
onUnmounted(() => {});
</script>
