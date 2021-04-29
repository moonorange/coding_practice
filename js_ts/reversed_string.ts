// Complete the solution so that it reverses the string passed into it.

export function solution(str: string): string {
  let rev_str = "";
  let len = str.length;
  while (0 < len) {
    rev_str += str[len - 1]
    len--;
  }
  return rev_str; // reverse this!
}


export function solution2(str: string): string {
  return str.split("").reverse().join("");
}
