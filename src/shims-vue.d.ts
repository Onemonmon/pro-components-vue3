/* eslint-disable */
declare module "*.vue" {
  import type { DefineComponent, Plugin } from "vue";
  const component: DefineComponent<{}, {}, any> & Plugin;
  export default component;
}
declare module "pro-components-vue3";
