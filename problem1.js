var num=3,i=1,t=num,res=num;
while(i<num)
{
    t=(t*10)+num; //33,333
    res+=t; //36 , 369
    i++;
}
console.log("answer",res);

            //logic2

// var op="";
// while(i<=num)
// {
//     op+=i;
//     i++;
// } 
// var ans=(num* Number(op));      
// console.log(ans);     