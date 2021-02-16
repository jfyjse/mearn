var arra=[10,1,11,2,12,3]
arra.sort((o1,o2)=>o1-o2)
var low=0,upp=arra.length-1;
var element=300;
count=0;
while (low<=upp) {
    let mid=Math.floor((low+upp)/2);
    if(element>arra[mid])
    {
        low=mid+1;
    }
    else if(element<arra[mid])
    {
        upp=mid-1;
    }
    else if(element==arra[mid])
    {
        count+=1;
        break;
    }
    
}
if(count==1)
{
    console.log("found");
}
else{
    console.log("no f");
}