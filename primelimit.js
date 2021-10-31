var l1=10,l2=25;
for(let i=l1;i<=l2;i++)
{
    var flag=0;
    for(let j=2;j<i;j++)
    {
        if(i%j==0)
        {
            flag=1;
            break;
        }
    }
    if(flag==0)
    {
        console.log(i);
    }
}