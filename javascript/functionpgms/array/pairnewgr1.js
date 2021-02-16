var arr=[1,2,3,4,5]
var num=6;
var low=0;
var upp=arr.length-1;
while(low<upp)
{
    let total=arr[low]+arr[upp];
    if(total== num)
    {
        console.log(arr[low],arr[upp]);
        upp-=1;
    
    }
    else if(total<num)
    {
        low+=1;
    }
    else
    {
        upp-=1;
    }
}