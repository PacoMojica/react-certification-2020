const COUNT_ROUND = {
  M: {
    decimalValue: 1000000,
    precision: 2,
  },
  K: {
    decimalValue: 1000,
    precision: 0,
  },
  H: {
    decimalValue: 100,
    precision: 0,
  },
  D: {
    decimalValue: 10,
    precision: 0,
  },
}

function formatCount(value, precision) {
  const usefulValues = Math.pow(10, precision || 0);
  return String(Math.floor(value * usefulValues) / usefulValues);
}

export default function count(rawCount, end = '') {
  const count = Number(rawCount);
  const stringEnd = end ? ' ' + end : '';

  if (count < 1000) {
    return `${count}${stringEnd}`;
  }

  for (const [prefix, data] of Object.entries(COUNT_ROUND)) {
    const { precision, decimalValue } = data;
    const totalViews = count / decimalValue;

    if (totalViews >= 1) {
      return `${formatCount(totalViews, precision)}${prefix}${stringEnd}`;
    }
  }

  return `0${stringEnd}`;
}