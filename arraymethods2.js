var employees=[
    [1000,"ram","developer",25000,1990,2005],
    [1001,"ravi","developer",27000,2000,2003],
    [1002,"raju","ba",26000,1995,2005],
    [1003,"nikhil","mrkt",24000,2000,2007]
]
var empname=employees.map(emp=>emp[1])
console.log(empname)

//print experience of each employee  along with name
var empexp=employees.map(emp=>[emp[5]-emp[4],emp[1]]) //for getting two or more values as output,should take it as an array
console.log(empexp)

//add 2000rs bonus to all employees
var salary=employees.map(emp=>emp[3]+2000)
console.log(salary)

