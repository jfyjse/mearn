var text="hai hello hai hello hai"
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
console.log(dic);