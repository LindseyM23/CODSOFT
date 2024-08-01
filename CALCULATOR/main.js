// THIS FUNCTION ALLOWS US TO INPUT TEXT ON THE DISPLAY BY PRESSUING THE BUTTONS

let display = document.getElementById("display");

function appendToDisplay(input){
display.value += input;
}

// this function ensures that the reset button/ ac button removes any input on the display when clicked
function reset(){
if (display.value !== null){
display.value="";
}
}

// thid function allows us to make the calculations byy evaluating the display value entered
function result(){
try{
    if(display.value.includes('/0')){
        throw new Error("Error");
    }
    display.value = eval(display.value);
}catch(error){
    display.value = error.message
}

}
