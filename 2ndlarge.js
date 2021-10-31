var num1=38,num2=40,num3=35;
//largest
//2nd largest
//lowest
//sort
if((num1>num2&&num1<num3)||(num1>num3&&num1<num2))
{
    console.log("2nd large=num1")
}
else if((num2>num1&&num2<num3)||(num2>num3&&num2<num1))
{
    console.log("2nd large=num2")
}
else if((num3>num1&&num3<num2)||(num3>num2&&num3<num1))
{
    console.log("2nd large=num3")
}
else
{
    console.log("equal numbers")
}