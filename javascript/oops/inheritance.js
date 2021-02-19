class Parent
{
    bike()
    {
        console.log("bike monu");
    }
}
class Child extends Parent
{
    chcls(){
    console.log("child")
    }
}

class Kchild extends Child
{
    kch()
    {
        console.log("kchild");
    }
}

ch= new Kchild()
ch.bike()
ch.kch()
ch.chcls()
