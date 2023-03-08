export const formatNumber = (num: number): string => {
  const numStr = num.toString().split('').reverse();
  const result: Array<string> = [];
  numStr.forEach((digit, index) => {
    if (index % 3 === 0 && index != 0) result.push(',');
    result.push(digit);
  });
  return result.reverse().join('');
};
