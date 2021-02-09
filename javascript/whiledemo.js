//10 nos asc

var i=1;
while(i<=10){
    console.log(i);
    i++;
}

//10 nos dec
var j=10;
while(j>0)
{
    console.log(j);
    j--;
}




// even nos upto 50 

var k=1;
while(k<50)
{
  if(k%2==0)
  {
 
    console.log(k);
  }
  k++;
}


console.log("\n\nfizz buzz fizzbuzz\n\n");


var f=1;
console.log("0");
while (f<=50) {
    if(f%15==0)
    {
    console.log("fizz buzz");
    }
    else if(f%5==0)
    {
        console.log("buzz");
    }
    else if(f%3==0)
    {
        console.log("fizz");
    }
    else
    {
        console.log(f);
    }



    f++;
}

console.log("\n\n\n\n");




//sum of 50 nos

var s=1;
var slimit=50;
var stot=0;

while (s<+slimit) {

    stot+=s;


    s++;
    
}
console.log(stot);
console.log("\n\n\n\n\n rev no");




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

