var employees=[
    [1000,"ram","developer",25000],
    [1001,"ravi","developer",26000],
    [1002,"raju","sales",27000],
    [1003,"nikhil","mrkt",24000]
]
for(let emp of employees)
{
    console.log(emp[1]);
}
//print employee details whose salary>25k
for(let emp of employees)
{ 
    if(emp[3]>25000)
    console.log(emp);
}
