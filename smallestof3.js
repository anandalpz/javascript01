var num1=20,num2=50,num3=20;
//largest
//2nd largest
//lowest
//sort
if((num1<num2)&&(num1<num3))
{
    console.log("Num1 is small")
}
else if((num2<num1)&&(num2<num3))
{
    console.log("num2 is small")
}
else if((num3<num1)&&(num3<num2))
{
    console.log("Num3 is small")
}
else if((num1==num2)&&(num1<num3))
{
    console.log("Num1&Num2 are equal&small")
}
else if((num2==num3)&&(num2<num1))
{
    console.log("Num2&Num3 are equal&small")
}
else if((num1==num3)&(num1<num2))
{
    console.log("Num1&Num3 are equal and small")
}
else{
    console.log("ALL NUMBERS ARE EQUAL")
}