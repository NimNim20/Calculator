const display = document.getElementById("display");

function appendToDisplay(input){
  display.value += input;
}

function clearDisplay(){
  display.value = "";
}

function calculate(){
  try{
    display.value = eval(display.value); //This line here is called "dangerous code" because if it gives an error, it will not display it properly, so we use the try/catch block to try the function and catch any errors.
  }
  catch(error){
    display.value = "Error";
  }
  
}