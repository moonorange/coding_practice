// https://www.codewars.com/kata/550f22f4d758534c1100025a/train/typescript
// https://www.codewars.com/kata/550f22f4d758534c1100025a/solutions/typescript


interface NewArray {
  is_removed: boolean,
  new_arr: string[]
}

export function removeNeedlessEle(arr: string[]): NewArray {
  let is_removed = false;
  let new_arr = [];
  let i = 0;
  for ( ; i < arr.length - 1; i++) {
    if (arr[i].length === arr[i+1].length && arr[i][0] != arr[i+1][0]) {
      is_removed = true;
      i++;
    }
    else {
      new_arr.push(arr[i])
    }
  }
  if (i === arr.length - 1) {
    console.log(arr[i]);
    new_arr.push(arr[i]);
  }
  return { is_removed, new_arr };
}

export function dirReduc(arr: string[]): string[] {
  let returned_val = removeNeedlessEle(arr);
  while (returned_val.is_removed) {
	  returned_val = removeNeedlessEle(returned_val.new_arr);
  }
//   console.log(returned_val.new_arr);
  return returned_val.new_arr;
}



dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]);
