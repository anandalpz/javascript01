var arr=[2,3,4,5,6,7,8]
var low=0,upper=arr.length-1;
var sum=6;
while(low<upper)
{
    tot=arr[low]+arr[upper];
    if(sum==tot)
    {
        console.log(arr[low],arr[upper]);
        break;
    }
    else if(tot>sum)
    {
        upper-=1;
    }
    else if(tot<sum)
    {
        low+=1;
    }
}