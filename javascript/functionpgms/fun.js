function add(num1,num2)
{
  let res=  num1+num2;
  console.log(res);
}
add(30,60)


function sub(num1,num2)
{
  let res=  num1-num2;
  console.log(res);
}
sub(30,60)

function div(num1,num2)
{
  let res=  num1/num2;
  console.log(res);
}
div(30,60)



//return in fns
function mul(num1,num2)
{
  let res=  num1*num2;
  return res;
}
console.log(mul(30,60));



function fact(num)
{
    var fact=1;
    for(let i=1;i<=num;i++)
    {
        fact*=i;
    }
    return fact;
}


console.log(fact(5)); 