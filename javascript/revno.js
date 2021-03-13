var revn=123;
var rem;
var reved=0;

while(revn!=0)
{
    rem=revn%10;
    reved=reved*10+rem;
    revn= Math.floor (revn/10);
}
console.log(reved);