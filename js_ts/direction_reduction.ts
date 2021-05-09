// https://www.codewars.com/kata/550f22f4d758534c1100025a/train/typescript


interface NewArray {
  is_removed: boolean,
  new_arr: string[]
}

export function removeNeedlessEle(arr: string[]): NewArray {
	let is_removed = false;
	let new_arr = [];
	for (let i = 0; i < arr.length - 1; i++) {
		if (arr[i].length === arr[i+1].length) {
		is_removed = true;
		i++;
		}
		else {
			new_arr.unshift(arr[i])
			console.log(arr[i]);
		}
	}
	return { is_removed, new_arr };
}

export function dirReduc(arr: string[]): string[] {
  let returned_val = removeNeedlessEle(arr);
  while (returned_val.is_removed) {
	  returned_val = removeNeedlessEle(returned_val.new_arr);
    // console.log(returned_val.new_arr);
  }
  return [];
}


dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]);
