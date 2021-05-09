// https://www.codewars.com/kata/54d81488b981293527000c8f/train/typescript
// Given a list of integers and a single sum value, return the first two values (parse from the left please) in order of appearance that add up to form the sum.


// First inefficient code
export function sumPairs(ints: number[], s: number): [number, number] | void {
	let ans: number[] = [];
	for (let i = 0; i < ints.length; i++) {
		for (let j = 0; j < ints.length; j++) {
			if (i === j) { continue; }
			if (ints[i] + ints[j] === s) {
				if (!ans.length) {
					ans = [i, j];
				}
				if (Math.max(i, j) < Math.max(...ans)) {
					console.log(Math.max(...ans));
					ans = [i, j];
				}
			}
		}
	}
	// console.log(ans);
	return ans.length ? [ints[ans[0]], ints[ans[1]]] : undefined;
}


// Second attempt after realizing redundant iteration
export function sumPairs2(ints: number[], s: number): [number, number] | void {
	let ans: number[] = [];
	for (let i = 0; i < ints.length; i++) {
		for (let j = i + 1; j < ints.length; j++) {
			if (i === j) { continue; }
			if (ints[i] + ints[j] === s) {
				if (!ans.length) {
					ans = [i, j];
				}
				if (Math.max(i, j) < Math.max(...ans)) {
					ans = [i, j];
				}
			}
		}
	}
	// console.log(ans);
	return ans.length ? [ints[ans[0]], ints[ans[1]]] : undefined;
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
