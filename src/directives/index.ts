import type { App } from 'vue';
import { thousandSeparator } from '@/directives/thousandSeparator';

export const registerThousandSeparatorDirective = (app: App) => {
  app.directive('thousand-separator', thousandSeparator);
};
