var num1 = 166;
var num2 = 23;
var num3 = 9;
// if ((num1 > num2) & (num1 > num3)) 
//     if (num2 > num3)
//     {

//         console.log("2 large num 2");
// }
// else {
//     console.log("2 lrge num3");
// }
// {
//     console.log("num1");
// }
// if ((num2 > num1) & (num2 > num3)) {
//     console.log("num2");
// }
// else {
//     console.log("num3");
// }




if ((num1 > num2) & (num1 > num3)) {
    console.log("num1");
    if (num2 > num3) {
        console.log("2 num2");
    }
    else {
        console.log("2 num3");
    }
   
}

else if ((num2 > num1) & (num2 > num3)) {

    if (num1 > num2) {
        console.log("2 num1");
    }
    else {
        console.log("2 num3");
    }
}
else  {
      console.log("num3");
      if(num2>num1)
      {
          console.log("2 num2");
      } 
      else
      {
          console.log("1 num1");
      }
    }

