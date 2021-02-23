# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
	def hasCycle(self, head: ListNode) -> bool:
		nodes_set = set()
		current = head
		while (current):
			if (current in nodes_set): return True
			nodes_set.add(current)
			current = current.next
		return False

	#O(1) memory
	def hasCycle_(self, head: ListNode) -> bool:
		walker = head
		runner = head
		while runner and runner.next:
			walker = walker.next
			runner = runner.next.next
			if (walker == runner): return True
		return False
