const amountInput = (amount: string | number): number => {
  const sum: number = Number(amount) * 100;

  if (sum <= Number.MIN_SAFE_INTEGER || sum >= Number.MAX_SAFE_INTEGER) {
    return 0;
  }

  return Number(sum.toFixed(0));
};

const stringReplaceToNumber = (value: string): number => Number(value.replace(/[^\d]/g, ""));

const createSplitter = (partSize: number): Function => {
  let parts = (str: string): string[] => {
    const { length } = str;

    if (length <= partSize) {
      return [str];
    }

    return [str.slice(length - partSize, length)].concat(parts(str.slice(0, length - partSize)));
  };
  return parts;
};

const amountOutput = (value: string | number): number => {
  const amount = Number(value);
  const fractionDigits = Math.log(100) * Math.LOG10E;
  const valueAbsStr = (amount / 100).toFixed(fractionDigits);
  const numberParts = valueAbsStr.split(".");
  const majorPart = numberParts[0];
  const minorPart = numberParts[1];
  const amountSplitter = createSplitter(3);
  const majorPartFormatted = amountSplitter(majorPart)
    .reverse()
    .join("");
  const formattedValueStr = majorPartFormatted + (minorPart ? `.${minorPart}` : "");

  return Number(formattedValueStr);
};

export default {
  amountInput,
  stringReplaceToNumber,
  amountOutput
};
