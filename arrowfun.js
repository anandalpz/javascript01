         //sum using arrow
// var sum=(num1,num2)=>num1+num2;
// console.log(sum(2,3))
         //odd or even using arrow
// var even=num=>num%2==0?true:false;
// console.log(even(2))
         //smart sub arrow
var ssub=(num1,num2)=>num1>num2?num1-num2:num2-num1;
console.log(ssub(5,10));  
      //print true if its start with A
var startA=name=>name[0]=="A"||name[0]=="a"?true:false;
console.log(startA("Auminar"));