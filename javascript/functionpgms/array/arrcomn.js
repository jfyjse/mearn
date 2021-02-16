//print common elements in an array

var arr1=[10,11,13,14,15];
var arr2=[8,9,10,11,16];

for(i=0;i<arr1.length-1;i++)
{
for(j=0;j<arr2.length-1;j++)
{
    if(arr1[i]==arr2[j])
        {
            console.log(arr1[i]);
        }
}}