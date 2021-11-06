// var arr=[1,2,3]
// //cubes of this array
// var cube=[]
// for(let i of arr)
// {
//     cube.push((i**3))
// }
// console.log(cube)
// //create an array from this, if num<5 num-1 if num>5 num+1 if num==5 ,5
var arr0=[2,6,7,3,4]
// var arr1=[]
// for(let j of arr0)
// {
//     if(j<5)
//     {
//         arr1.push(j-1)
//     }
//     else if(j>5)
//     {
//         arr1.push(j+1)
//     }
//     else
//     {
//         arr1.push(j)
//     }
// }
// console.log(arr1)
             //map()
// var arr=[2,3,4,5,6]

// var squares=arr.map(num=>num**2)
// console.log(squares)

var mapout=arr0.map(num=>num>5?num+1:num<5?num-1:num)
console.log(mapout)