export function sumPairs(ints: number[], s: number): [number, number] | void {
	let ans_list = [];
	for (let i = 0; i < ints.length; i++) {
		for (let j = 0; j < ints.length; j++) {
			if (i === j) {
				j++ ;
			}
			if (ints[i] + ints[j] === s) {
				ans_list.push(i, j);
			}
		}
	}
	return undefined;
}

const l1: number[] = [1, 4, 8, 7, 3, 15],
l2: number[] = [1, -2, 3, 0, -6, 1],
l3: number[] = [20, -13, 40],
l4: number[] = [1, 2, 3, 4, 1, 0],
l5: number[] = [10, 5, 2, 3, 7, 5],
l6: number[] = [4, -2, 3, 3, 4],
l7: number[] = [0, 2, 0],
l8: number[] = [5, 9, 13, -3];

console.log(sumPairs(l5, 10));
