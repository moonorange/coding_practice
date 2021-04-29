export function numberToString(num: number): string {
  // Return a string of the number here!
  const str_num = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  let ans = "";
  let is_minus = false;
  if (num < 0) {
      num *= -1;
      is_minus = true;
  }
  while (9 < num) {
    ans = str_num[num % 10] + ans;
    num = Math.floor(num / 10);
  }
  ans = str_num[num] + ans;
  if (is_minus) {
    ans = '-' + ans;
  }
  return ans;
}
