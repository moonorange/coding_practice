class Solution:
    def lastStoneWeight(self, stones: List[int]) -> int:
        while(len(stones) > 1):
            stone1 = max(stones)
            stones.remove(max(stones))
            stone2 = max(stones)
            stones.remove(max(stones))
            if stone1 != stone2:
                stones.append(stone1-stone2)

        if stones:
            return stones[0]
        else:
            return 0
