var sum=0;
var j=1;
var i=0;
var n=1;

while(n<10)
{

// n=n-1;
while (i<=(n)) {

    sum = sum + j;
    j = (j * 10) + 1;  
    i++;
    
}
console.log(sum*(n+1));
n++;
}