<template>
  <div v-echarts="options" style="width: 400px; height: 300px"></div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, reactive } from 'vue';
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
onMounted(() => {});
onUnmounted(() => {});
</script>
