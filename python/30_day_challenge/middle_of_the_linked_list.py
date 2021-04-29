

"""
What I learnt
Can find the middle of list by using slow and fast(2*slow) pointer
"""

# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

# brute force, dirty code
class Solution:
    def middleNode(self, head: ListNode) -> ListNode:
        node_size = 0
        temp = head
        while(temp):
            node_size += 1
            temp = temp.next
        count = 0
        while(head):
            if count == node_size // 2:
                ans = head
                break
            count += 1
            head = head.next
        return ans

class Solution_time_on:
    def middleNode(self, head):
        A = [head]
        while A[-1].next:
            A.append(A[-1].next)
        return A[len(A) // 2

class Solution_memory_on(object):
    def middleNode(self, head):
        slow = fast = head
        while fast and fast.next:
            slow = slow.next
            fast = fast.next.next
        return slow
