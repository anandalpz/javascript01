var arr=[10,11,12,13,14,15,16]
var value=15;
var flag=0;
for(let i of arr)
{
    if(i==value)
    {
        flag=1;
        break;
    }
}
console.log((flag==1)?"element found":"Not found");
