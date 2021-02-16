// employee

var employee=
{
    id: 101,
    name: "baji",
    design: "contasa",
    salary: 2500
}
console.log(employee.salary);
console.log(employee["salary"]);
employee["salary"]+=5000;

if("gender" in employee)
{
    console.log("f");
}
else
{
    // employee.gender="male";
    employee["gender"]="male";
}
console.log(employee);