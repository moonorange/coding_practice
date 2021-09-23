# https://www.hackerrank.com/challenges/one-week-preparation-kit-plus-minus/problem?h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=one-week-preparation-kit&playlist_slugs%5B%5D=one-week-day-one

def plusMinus(arr):
    positive = 0
    negative = 0
    zero = 0
    length = len(arr)
    for ele in arr:
        if ele == 0:
            zero += 1
        elif ele < 0:
            negative += 1
        else:
            positive += 1
    print('{:.6f}'.format(positive / length))
    print('{:.6f}'.format(negative / length))
    print('{:.6f}'.format(zero / length))

if __name__ == '__main__':
    n = int(input().strip())

    arr = list(map(int, input().rstrip().split()))

    plusMinus(arr)
