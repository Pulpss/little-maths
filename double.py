from pycsp3 import *

n = int(input("Donner valeur n: "))

sum = int(n*(n*n+1)/2)
sumSquared = int((n+1)*(2*n+1)/6)

print(str((n+1)*(2*n+1)/6))

x = VarArray(size=[n, n], dom=range(1, n*n+1))

satisfy(
    AllDifferent(x),
    [Sum(row) == sum for row in x],
    [Sum(col) == sum for col in columns(x)],
    [Sum(x[i, i] for i in range(n)) == sum],
    [Sum(x[i, j]*x[i, j] for i in range(n)) == sumSquared for j in range(n)],
    [Sum(x[j, i]*x[j, i] for i in range(n)) == sumSquared for j in range(n)],
    [Sum(x[i, i]*x[i, i] for i in range(n)) == sumSquared],

)

if solve(sols=ALL) is SAT:
    for i in range(n):
        print(values(x[i]))
    print("Number of solutions: ", n_solutions())

print("Domain of any variable: ", x[0][0].dom)