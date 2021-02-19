class Employee
{
    constructor(id,name,desig,sal){
    this.id=id;
    this.name=name;
    this.desig=desig;
    this.sal=sal;
    }
}



var obj= new Employee(100,"ajay","dev",30000)
var obj1= new Employee(101,"bjay","dev",10000)
var obj2= new Employee(100,"cjay","kev",340000)
var obj3= new Employee(100,"djay","kev",3000)

var employ=[]
employ.push(obj)
employ.push(obj1)
employ.push(obj2)
employ.push(obj3)


ename=employ.map(emp=>emp.name.toUpperCase())//to uppercase
console.log(ename);

// for(let emp of employ)//dev desig print
// {
//     if(emp.desig=="dev")
//     {
//         console.log(emp.name);
//     }

  
// }

employ.filter(emp=>emp.desig=="kev").forEach(o=>console.log(o.name))