let screen= document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenValue = '';
for(item of buttons) {
    item.addEventListener('click', (e)=>{
       buttonText = e.target.innerText;
        if(buttonText== 'AC') {
            screenValue = "";
            screen.value = screenValue;
        }
         
        else if (buttonText == '=') {
            try {
                screen.value = eval(screen.value);
            }

            catch(e) {
                screenValue = "Syntax Error!";
                screen.value = screenValue;
            }
            
        }

        else if (buttonText == 'DEL') {
             screen.value = screen.value.slice(0,-1);
        }

        else {
            screen.value += buttonText;
        }  
    });
}