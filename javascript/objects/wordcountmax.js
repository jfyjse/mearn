var text="hai hai hai hai hello hai hello hai iop poi iop poi"
var words= text.split(" ")
// split the text with spaces
var dic={} // empty object
for(let word of words)
{
    if(word in dic)
    {
        dic[word]+=1
    }
    else{
        dic[word]=1;
    }
}
// console.log(dic);

elements=[]
for(k in dic)
{
    elements.push([dic[k],k])
}
elements.sort((o1,o2)=> o2[0]-o1[0])
console.log(elements[0]);
