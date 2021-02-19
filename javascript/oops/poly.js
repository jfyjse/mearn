// methode overloading
console.log("Method Overloading");
class Maths
{
    add (num1)
    {
        console.log("1");
    }
    add (num1,num2)
    {
        console.log("2");
    }
    add (num1,num2,num3)
    {
        console.log("3");
    }
}

var mth= new Maths()
mth.add(1);
mth.add(1,2);
mth.add(1,3,2);


//method overriding


console.log("Method overriding");
class Parent 
{
    phone()
    {
        console.log("nokia");
    }
}

class Child extends Parent
{
    phone()
    {
        super.phone();// to access from parent
        console.log("iphone");
    }
}
var obj= new Child()
obj.phone();
