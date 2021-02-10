var arr=[3,4,5],sum=0;
var arra=[];
for(let num of arr)
{
    sum+=num;
    
}
for(let num of arr)
{
    arra.push(sum-num)
}
console.log(arra);