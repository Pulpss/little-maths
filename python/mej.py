from pycsp3 import *

rows= int(input("Donner valeur row: "))
cols = int(input("Donner valeur col: "))

x = VarArray(size=[rows, cols], dom={0, 1})

satisfy(
    [(x[col-1, row-1]+x[col, row-1]+x[col+1, row-1]+x[col-1, row]+x[col+1, row]+x[col-1, row+1]+x[col, row+1]+x[col+1, row+1])%2 == 1 for row in range(1, cols-1) for col in range(1, rows-1)],
    [(x[0, 1]+x[1, 0]+x[1, 1])%2 == 1],
    [(x[0, cols-1-1]+x[1, cols-1-1]+x[1, cols-1])%2 == 1],
    [(x[rows-1-1, 0]+x[rows-1-1, 1]+x[rows-1, 1])%2 == 1],
    [(x[rows-1-1, cols-1-1]+x[rows-1-1, cols-1]+x[rows-1, cols-1-1])%2 == 1],
    [(x[0, i-1]+x[0, i+1]+x[1, i-1]+x[1, i]+x[1, i+1])%2 == 1 for i in range(1, cols-1)],
    [(x[rows-1, i-1]+x[rows-1, i+1]+x[rows-1-1, i-1]+x[rows-1-1, i]+x[rows-1-1, i+1])%2 == 1 for i in range(1, cols-1)],
    [(x[i-1, 0]+x[i+1, 0]+x[i-1, 1]+x[i, 1]+x[i+1, 1])%2 == 1 for i in range(1, rows-1)],
    [(x[i-1, cols-1]+x[i+1, cols-1]+x[i-1, cols-1-1]+x[i, cols-1-1]+x[i+1, cols-1-1])%2 == 1 for i in range(1, rows-1)],
)

if solve(sols=ALL) is SAT:
    for i in range(rows):
        print(values(x[i]))
    print("Number of solutions: ", n_solutions())
