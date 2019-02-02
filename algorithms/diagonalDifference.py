#!/bin/python3

# import math
# import os
# import random
# import re
# import sys


arr = [[11, 2, 4],[4, 5, 6],[10, 8, -12]]

# Complete the diagonalDifference function below.
def diagonalDifference(arr):
    sum1 = 0
    sum2 = 0
    for i in range(len(arr)):
        sum1 += arr[i][i]
        sum2 += arr[i][len(arr)-1-i] 
        
    print(sum1, sum2)
    print(abs(sum1-sum2))


diagonalDifference(arr)  