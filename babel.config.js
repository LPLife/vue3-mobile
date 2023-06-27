module.exports = {
  presets: ['@vue/cli-plugin-babel/preset'],
  plugins: [
    [
      'import',
      {
        libraryName: 'echarts',
        libraryDirectory: 'es',
        camel2DashComponentName: false,
        style: true,
      },
      'echarts',
    ],
  ],
};
