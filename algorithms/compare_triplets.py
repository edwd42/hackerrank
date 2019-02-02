import sys

a = [17, 28, 30]
b = [99, 16, 8]

def compareTriplets(a,b):

    Alice = 0
    Bob = 0

    for i in range(len(a)):
        # print(a[i], b[i])
        if a[i] < b[i]:
            Bob += 1
        else:
            Alice += 1

    print(Alice,Bob)

compareTriplets(a,b)