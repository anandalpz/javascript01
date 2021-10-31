//print fizz if num/ by 3
//print buzz if num/ by 5
//print fizzbuzz if num/ by 15
var num=15,res="";
       //logic1
// if(num%3==0)
// {
// res+="fizz";
// }
// if(num%5==0)
// {
//  res+="buzz"
// }
// console.log(res)
       //logic2
num%3==0?res+="fizz":res;
console.log(num%5==0?res+="buzz":res);

