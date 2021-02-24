var clk=document.querySelector("#clk")
clk.addEventListener("click",()=>{
  clk.style.color="blue"
  clk.textContent="clicked"
})

var declk=document.querySelector("#dclk")
declk.addEventListener("dblclick",()=>{
    declk.style.color="orange"
    declk.textContent="dclkeddd"
})
var mse=document.querySelector("#ovr")
mse.addEventListener("mouseover",()=>{
mse.style.color="yellow"
mse.textContent="mouse mattedeyy"
})
mse.addEventListener("mouseout",()=>{
    mse.style.color="black"
    mse.textContent="mouse over"
    })