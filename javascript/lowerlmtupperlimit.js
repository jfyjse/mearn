var num=2,lowlmt=8,upplimit=25 ,result=0;
for(let i=1;i<=upplimit;i++)
{
    result=i**num; //1**3=3
    if((result>=lowlmt)&(result<=upplimit)) //3>=8 & 3<=25
    {
    console.log(result);
    }
}
