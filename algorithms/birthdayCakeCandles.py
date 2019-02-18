#!/bin/python3

# https://www.hackerrank.com/challenges/birthday-cake-candles/problem?h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen

import math
import os
import random
import re
import sys

# Complete the birthdayCakeCandles function below.
def birthdayCakeCandles(ar):
    ar.sort(reverse=True)
    print(ar)
    # count = []
    # for i in range(len(ar)):
    #     if ar[i] == ar[i-i]:
    #         count += 1
    
    # refactor in list comprehension
    count = [1 for i in range(len(ar)) if ar[i] == ar[i-i]]

    print(len(count))


ar = [3,2,1,3]
birthdayCakeCandles(ar)

# if __name__ == '__main__':
#     fptr = open(os.environ['OUTPUT_PATH'], 'w')

#     ar_count = int(input())

#     ar = list(map(int, input().rstrip().split()))

#     result = birthdayCakeCandles(ar)

#     fptr.write(str(result) + '\n')

#     fptr.close()
