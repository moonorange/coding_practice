from functools import reduce

#Python O(N)
class Solution:
   def backspaceCompare(self, S, T):
        def back(res, c):
            if c != '#': res.append(c)
            elif res: res.pop()
            return res
        return reduce(back, S, []) == reduce(back, T, [])

import itertools
#memory complexity O(1)
class Solution2(object):
    def backspaceCompare(self, S, T):
        def F(S):
            skip = 0
            for x in reversed(S):
                if x == '#':
                    skip += 1
                elif skip:
                    skip -= 1
                else:
                    yield x

        return all(x == y for x, y in itertools.zip_longest(F(S), F(T)))

"""
What I learnt
how to use higher-order functions, reduce in this case

The first arg is function(必須)
The second one is iterable obj(必須)
The thirtd one is initializer(オプション)
"""
