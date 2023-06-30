// directives/thousandSeparator.ts

import type { DirectiveBinding } from 'vue';

const thousandSeparatorDirective = (el: HTMLElement, binding: DirectiveBinding) => {
  const value = binding.value as number | string;
  const decimalDigitsArg = binding.arg; // 小数位数参数的变量名
  // const padZero = binding.value.padZero || false; // 是否补0，默认为false

  // 从千分位格式化参数中获取小数位数
  let decimalDigits = 0;
  if (decimalDigitsArg) {
    decimalDigits = Number(decimalDigitsArg);
    if (isNaN(decimalDigits)) {
      console.warn('Invalid decimal digits parameter');
      return;
    }
  }

  const numberValue = Number(Number.parseFloat(value as string).toFixed(decimalDigits));
  if (!isNaN(numberValue)) {
    const formattedValueParts = numberValue.toLocaleString().split('.');
    let formattedValue = formattedValueParts[0];

    if (decimalDigits > 0) {
      let decimals = '';
      if (formattedValueParts.length === 2) {
        decimals = formattedValueParts[1];
      }
      decimals = decimals.padEnd(decimalDigits, '0');
      formattedValue += `.${decimals}`;
    }
    // else if (padZero && formattedValueParts.length === 1) {
    //   // 如果没有小数部分，并且设置了补0，则补0
    //   formattedValue += '.0'.padEnd(decimalDigits + 2, '0');
    // }

    el.innerText = formattedValue;
  }
};

export const thousandSeparator = {
  mounted(el: HTMLElement, binding: DirectiveBinding) {
    thousandSeparatorDirective(el, binding);
  },
  updated(el: HTMLElement, binding: DirectiveBinding) {
    thousandSeparatorDirective(el, binding);
  },
};
