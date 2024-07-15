export const makeArrFromRange = (startIndex: number, endIndex: number) => {
  const arr = [];
  for (let i = startIndex; i < endIndex; i++) {
    arr.push(i);
  }
  return arr;
};
