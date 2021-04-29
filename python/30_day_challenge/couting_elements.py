class Solution:
    def countElements(self, arr: List[int]) -> int:
        count = 0
        for element in arr:
            if element + 1 in arr:
                count += 1
        return count
