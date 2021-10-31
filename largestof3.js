var num1=40,num2=40,num3=40;
//largest
//2nd largest
//lowest
//sort
if((num1>num2)&&(num1>num3))
{
    console.log("Num1 is large")
}
else if((num2>num1)&&(num2>num3))
{
    console.log("num2 is large")
}
else if((num3>num1)&&(num3>num2))
{
    console.log("Num3 is large")
}
else if((num1==num2)&&(num1>num3))
{
    console.log("Num1&Num2 are equal&large")
}
else if((num2==num3)&&(num2>num1))
{
    console.log("Num2&Num3 are equal&large")
}
else if((num1==num3)&(num1>num2))
{
    console.log("Num1&Num3 are equal and large")
}
else{
    console.log("ALL NUMBERS ARE EQUAL")
}