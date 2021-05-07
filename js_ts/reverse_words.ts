// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.
// https://www.codewars.com/kata/5259b20d6021e9e14c0010d4/train/typescript

// First attempt
export function reverseWords(str: string): string {
  const split_str = str.split(" ");
  for (let i = 0; i < split_str.length; i++) {
    split_str[i] = split_str[i].split("").reverse().join("");
  }
 return split_str.join(" ");
}
