//q1
// var arr=[2,3,4] //7,6,5
// var sum=0;
// for(let i of arr)
// {
//      sum=sum+i;
// }
// for(let i of arr)
// {
//     console.log(sum-i);
// }


//q2
// var arr=[1,2,3,4] //sum=7     op->pair(3,4)
                     //sum=6     op->pair(2,4)
var arr=[2,3,4,5];
var sum=7;
for(let i=0;i<arr.length;i++)
{
    for(let j=i+1; j<arr.length;j++)
    {
        if(arr[i]+arr[j]==sum)
        {
            console.log(arr[i],arr[j]);
            break;

        }
    }
}


//q3
//map the array 3,7,5,4,1 to add 1 if no. is>5 sub 1 if no.<5 no.=no. if no.=5
// var arr=[3,7,5,4,1];
// for(let i of arr)
// {
//     var res=i>5?i+1:i<5?i-1:i;
//     console.log(res);
// }
