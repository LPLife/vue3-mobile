declare module 'echarts' {
  interface LineOption {
    // ...
  }
  export function init(
    dom: HTMLDivElement | HTMLCanvasElement,
    theme?: object | string,
    opts?: object
  ): ECharts;
}
