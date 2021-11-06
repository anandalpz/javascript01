var expenses=[20000,22000,17000,27000,30000];
// for(let i=0;i<expenses.length;i++)
// {
//     console.log(expenses[i]);
// }
           //or
           var high=0;
           var low=expenses[0];
for(let i of expenses){
  high= high>i?high:i; 
  low=low>i?i:low;
    
}
console.log(high);
console.log(low);