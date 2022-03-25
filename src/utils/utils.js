export const arrToMap = (arr) => arr.reduce((acc, item) => ({ ...acc, [item.id]: item }), {});

export const numberSpace = (num) => {
  const str = num.toString();
  return str.replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, '$1 ');
};
