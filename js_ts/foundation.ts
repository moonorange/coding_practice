export const boolToWord = (bool: boolean): string => {
  if (bool) {
    return 'Yes';
  } else {
    return 'No';
  }
};


// string of number to reversed number list
export const digitize = (n: number): number[] => {
  const str_n = [...String(n)];
  const num_list = str_n.map(x => Number(x));
  return num_list.reverse();
};


// Sum of positive
export function positiveSum(arr:number[]):number {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (0 < arr[i]) {
      sum += arr[i];
    }
  }
  return sum;
}


// Better solution of Sum of positive
export function positiveSum2(arr:number[]):number {
  return arr.reduce((sum, n) => n > 0 ? sum + n : sum, 0);
}
