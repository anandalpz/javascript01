var arr=[10,20,30,40];
var arr1=[20,21,30,31];
for(let i of arr)
{
  for(let j of arr1)
  {
    if(i==j)
    {
        console.log(i);
        break;
    }
   }    
}