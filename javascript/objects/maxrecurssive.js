// var txt="ABABACD"
// var text=txt.split('');
// var dic={}
// var count=0;
// console.log(text);
// for (let i in text)
// {
//     for(let j=i+1;j<text.length;j++)
//     {
//         if(text[i]==text[j])
//         {
//             count+=1;
//         }
        
//         console.log(i,count);
//     }
//     console.log(i,count);
// }


// count = {}
// for s in check_string:
//   if s in count:
//     count[s] += 1
//   else:
//     count[s] = 1

// for key in count:
//   if count[key] > 1:
//     print key, count[key]
var count={}
var txt="ABABACD"
for(let str in txt)
{
    if(str in count)
    {
    count[str]+=1;
    }
    else
    {
        count[str]=1;
    }
}
console.log(count);
for(txt in count)
{
    if(count[txt]>1)
    {
        console.log(txt,count[key]);
    }
}