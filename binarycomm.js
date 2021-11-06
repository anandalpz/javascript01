var arr=[12,12,12,13,13,14,14]
arr.sort((num1,num2)=>num1-num2)
var i=0;
while(i<arr.length)
{
    if (arr[i]==arr[i+1])
    {
        console.log(arr[i]);
        i+=2;
    }
    else{
        i++;
    }
}
