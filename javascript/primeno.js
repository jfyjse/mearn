var num=15;
var count=0;
for(let i=2;i<num;i++)
{
    console.log(i);
    if((num%i)==0)
    {
        // console.log("prime");
        count++;
        break;
    }
    
}
if(count==1)
{
    console.log("n prime");
}
else
{
    console.log("p");
}
