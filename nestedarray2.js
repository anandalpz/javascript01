var employees=[
    [1000,"ram","developer",25000,1990,2005],
    [1001,"ravi","developer",27000,2000,2003],
    [1002,"raju","ba",26000,1995,2005],
    [1003,"nikhil","mrkt",24000,2000,2007]
]

//print name and experience of each employee
//print details of employees whose salary>25k
//print highest paid employee
//print lowest paid employee
//print most experienced employee
var exp=0;
for(let emp of employees)
{
    console.log(emp[1],(emp[5]-emp[4]));
    if((emp[5]-emp[4])>exp)
    {
        exp=emp[5]-emp[4];
        var ename=emp[1];
    }

}
console.log("details of employees whose salary>25k")
for(let emp of employees)
{ 
    if(emp[3]>25000)
    console.log(emp);
}

var h=0;
for(let emp of employees)
{ 
    if(emp[3]>h)
    {
        h=emp[3];
        var name=emp[1];
    }
    else
    {
        var low=emp[1];
    }

}
console.log("highest paid employee:",name)
console.log("lowest paid employee:",low)
console.log("most experienced employee:",ename)
