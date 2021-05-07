// https://www.codewars.com/kata/55fd2d567d94ac3bc9000064/train/typescript


// First attempt
export function rowSumOddNumbers(n: number) {
  const last = (n ** 2) + (n - 1);
  const first = last - (2 * (n - 1))
  return n / 2 * (first + last);
}
