// Basic problems to get used to typescript

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



// Find Maximum and Minimum Values of a List
// https://www.codewars.com/kata/577a98a6ae28071780000989/train/typescript

export const max = (list: number[]): number => {
  let max_num = list[0];
  for (let i = 0; i < list.length; i++) {
    if (max_num < list[i]) {
      max_num = list[i];
    }
  }
  return max_num;
};

export const min = (list: number[]): number => {
  let min_num = list[0];
  for (let i = 0; i < list.length; i++) {
    if (list[i] < min_num) {
      min_num = list[i];
    }
  }
  return min_num;
};


// Simple, remove the spaces from the string, then return the resultant string.
// https://www.codewars.com/kata/57eae20f5500ad98e50002c5/train/typescrip

export function noSpace(x:string):string {
  return x.split(" ").join("");
}

// Build a function that returns an array of integers from n to 1 where n>0.
// Example : n=5 --> [5,4,3,2,1]
// https://www.codewars.com/kata/5a00e05cc374cb34d100000d/train/typescript

export const reverseSeq = (n: number): number[] => {
  return [...Array(n)].map((_, i) => n - i);
};
