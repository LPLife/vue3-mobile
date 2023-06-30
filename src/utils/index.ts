/**
 *
 * @param num 数值
 * @param decimalCount 位数
 * @returns 格式化后千分位数字
 */
export function formatNumber(num: number, decimalCount = 2) {
  if (!isDefined(num)) return '';
  const parts = num.toFixed(decimalCount).toString().split('.');
  let integerPart = parts[0];
  const decimalPart = parts[1];
  const result = [];

  while (integerPart.length > 3) {
    result.unshift(integerPart.slice(-3));
    integerPart = integerPart.slice(0, -3);
  }

  if (integerPart) {
    result.unshift(integerPart);
  }

  return result.join(',') + '.' + decimalPart;
}

function isDefined(value: number) {
  return value !== undefined && value !== null;
}
