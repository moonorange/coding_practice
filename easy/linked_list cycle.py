class Solution:
    def hasCycle(self, head: ListNode) -> bool:
		nodes_set = set()
		current = head
		while (current):
			if (current in nodes_set):
				return True
			nodes_set.add(current)
			current = current.next
		return False
