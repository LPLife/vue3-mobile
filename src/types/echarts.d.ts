import { Directive, App, Plugin } from 'vue';

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
