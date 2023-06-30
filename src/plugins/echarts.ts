import type { Directive, App, Plugin } from 'vue';
/**
 * 自定义指令 echarts 使用方式
 * <div v-echarts="options" style="width: 400px; height: 300px"></div>
 *
 */
const echartsDirective: Directive = {
  mounted(el, binding) {
    import('echarts').then((echarts) => {
      const chartInstance = echarts.init(el as HTMLDivElement);
      const { value: options } = binding;
      if (options && typeof options === 'object') {
        chartInstance.setOption(options);
      }
    });
  },
};

const echartsPlugin: Plugin = {
  install(app: App) {
    app.directive('echarts', echartsDirective);
  },
};

export default echartsPlugin;
