// Your task is to write a function which returns the sum of following series upto nth term(parameter).

// Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...

export function SeriesSum(n: number): string
{
  if (n === 0) {
    return "0.00";
  }
  let sum_term = 0;
  for (let i = 1; i < n; i++) {
    sum_term += (1 / (1 + 3 * i))
  }
  const ans = 1 + sum_term
  return ans.toPrecision(3);
}
