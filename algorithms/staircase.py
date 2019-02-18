#!/bin/python3

import math
import os
import random
import re
import sys

# Complete the staircase function below.
def staircase(n):
    # for x in range(n):
    #     print((n-x-1) * " " + (x+1) * "#")

    # refactored in list comprehension
    x = [print((n-x-1) * " " + (x+1) * "#") for x in range(n)]


if __name__ == '__main__':
    n = int(input())

staircase(n)