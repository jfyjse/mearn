class Student
{
    static getCollege(){
        return "Luminaar"
    }
    constructor(rol,name,course)
    {
        this.rol=rol;
        this.name=name;
        this.course=course;
        

    }


    printStudent()
    {
        console.log(this.rol+","+this.course+","+this.name+","+Student.getCollege());
    }
}
var ob=new Student(1,"rahul","mca")
var ob1=new Student(3,"rahul","mca")
var ob3=new Student(4,"rahul","mca")
ob.printStudent()
ob1.printStudent()
ob3.printStudent()
console.log(Student.getCollege());