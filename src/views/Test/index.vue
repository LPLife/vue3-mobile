<template>
  <div id="myChart" :style="{ width: '50vw', height: '60vh' }"></div>
</template>

<script setup>
import { onMounted, getCurrentInstance } from 'vue';

const vm = getCurrentInstance()?.proxy;

const $echarts = vm?.$echarts;
onMounted(() => {
  // this.$echarts调用 初始化
  let myChart = $echarts.init(document.getElementById('myChart'));
  // 绘制图表
  myChart.setOption({
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
});
</script>
