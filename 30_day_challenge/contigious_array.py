# misinterpred the question in my first submission
class Solution:
    def findMaxLength(self, nums: List[int]) -> int:
        ans = 0
        i = 0
        while(i < len(nums) - 1):
            if nums[i] == 1:
                if nums[i+1] == 0:
                    ans += 2
                    i += 1
            else:
                if nums[i+1] == 1:
                    ans += 2
                    i += 1
                    print(i)
            i += 1

        return ans

# misinterpreted the questio in my second submission again
class Solution2:
    def findMaxLength(self, nums: List[int]) -> int:
        zero = 0
        one = 0
        for num in nums:
            if num == 0:
                zero += 1
            else:
                one += 1
        if zero > one:
            return one * 2
        else:
            return zero * 2

class Solution3:
    def findMaxLength(self, nums: List[int]) -> int:
        global_max = current_max = 0
        i = 0
        while(i < len(nums) - 1):
            if nums[i] == nums[i+1]:
             if global_max < current_max:
                global_max = current_max
                current_max = 0
                i += 1
            else:
                current_max += 2
                i += 1
            i += 1

        return max(global_max,current_max)

class Solution_ex(object):
    def findMaxLength(self, nums):
        count = 0
        max_length=0
        table = {0: 0}
        for index, num in enumerate(nums, 1):
            if num == 0:
                count -= 1
            else:
                count += 1

            if count in table:
                max_length = max(max_length, index - table[count])
            else:
                table[count] = index

        return max_length
