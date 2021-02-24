var input = document.querySelector("#inpuit")

function clearBox()
{
    document.querySelector("#inpuit").value="";

}
function displayBox(num)
{
    document.querySelector("#inpuit").value+=num;

}

function result() 
{
    let data=document.querySelector("#inpuit").value
   let  res= eval(data)
   document.querySelector("#inpuit").value=res;
}


function slize()
{
    let data=document.querySelector("#inpuit").value
    let slze=data.slice(0,-1);
    document.querySelector("#inpuit").value=slze;
}