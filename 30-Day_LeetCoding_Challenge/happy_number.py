class Solution:
    def isHappy(self, n: int) -> bool:
        import numpy as np
        seen = set()
        while n != 1:
            num_list = list(map(int,str(n)))
            n = sum(np.power(num_list,2))
            if n in seen:
                return False
            else:
                seen.add(n)
        else:
            return True
