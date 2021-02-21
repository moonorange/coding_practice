# Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0?
# Find all unique triplets in the array which gives the sum of zero.
# Notice that the solution set must not contain duplicate triplets.
class Solution:
	def threeSum(self, nums: List[int]) -> List[List[int]]:
		"""
		:type nums: List[int]
		:rtype: List[List[int]]
		"""
		nums.sort()
		result = []
		for i in range(len(nums) - 2):
			if i != 0 and nums[i] == nums[i-1]: continue
			target = -nums[i]
			low, high = i+1, len(nums) - 1
			while low < high:
				if nums[low] + nums[high] == target:
					result.append((nums[i], nums[low], nums[high]))
					while low < high and nums[low] == nums[low+1]: low += 1
					while low < high and nums[high] == nums[high-1]: high-= 1
					low += 1
					high -= 1
				elif nums[low] + nums[high] < target:
					low += 1
				else:
					high -= 1
		return result

# 参考[https://leetcode.com/problems/3sum/discuss/7380/Concise-O(N2)-Java-solution]
