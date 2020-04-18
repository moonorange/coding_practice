# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

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
