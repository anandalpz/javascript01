var products=[
    ["001","complan",275,50],
    ["002","boost",255,20],
    ["003","horlicks",225,5],
    ["004","bournvita",230,0],
    ["005","pediasure",220,10]
]
//print product names
var name=products.map(item=>item[1]);
console.log(name);

//print available product name
var name=products.filter(item=>(item[3]>0)).map(item=>item[1]);
console.log(name);

//print out of stock product details
var outp=products.filter(item=>(item[3]==0))   
console.log(outp);

//list all products whose price >250
var pro=products.filter(item=>item[2]>250)
console.log(pro)

// 
