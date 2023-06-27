interface Modules {
  [key: string]: any;
}
const modules: Modules = import.meta.globEager('./modules/*.ts');
export default Object.keys(modules).reduce((modulesContainer, modulePath) => {
  const moduleName = modulePath.replace(/^\.\/modules\/(.*)\.\w+$/, '$1');
  // 将 './modules/moduleName.ts' 转换为 'moduleName'
  const module = modules[modulePath].default;
  return { ...modulesContainer, [moduleName]: module };
}, {});
