var arr=[2,6,7,3,4]

var even=arr.filter(num=>num%2==0)
console.log(even)


//get all numbers>5
var greater=arr.filter(num=>num>5)
console.log(greater)


//print squares of all numbers >5
var sq=arr.filter(num=>num>5).map(num=>num**2)
console.log(sq)

