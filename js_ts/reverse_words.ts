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


// Same thing as one liner in best practices
export function reverseWords2(str: string): string {

  // 1. first create an array with the original words
  // 2. loop through each word and make it an array of characters
  // 3. reverse the array and make it a string again, so it is a word again but reversed
  // 4. join the resulting array

  return str.split(' ').map(word => word.split('').reverse().join('')).join(' ');
}
