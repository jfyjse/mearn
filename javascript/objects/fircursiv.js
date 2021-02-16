var text="ABABACD"
var dic={}
for(let i of text)
{
    if(i in dic)
    {
        console.log("recursiv is "+i);
        break
        
    }
    else
    {
        dic[i]=1;
    }
}