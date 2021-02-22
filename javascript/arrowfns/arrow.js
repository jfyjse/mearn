// var sub=(num1,num2)=>num1-num2
// console.log(sub(10,7));
// var cub=(num1)=>num1**3
// console.log(cub(3));



var arra=[1,2,3,4,5,7,8]
// map
var data=arra.map(num1=>num1**2)
console.log(data);
//filter
var dataa=arra.filter(num=>num%2==0)
console.log(dataa);
//reduce
var dataaa=arra.reduce((num1,num2)=>num1+num2)
console.log(dataaa);

//sort
arra.sort((o,o1)=>o>o1?-1:1).forEach(o=>console.log(o))