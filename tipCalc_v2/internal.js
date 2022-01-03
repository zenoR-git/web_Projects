
const billElement = document.querySelector("input[name='bill']");
const tipElement = document.querySelector("select[name='amount']");
const displayElement = document.querySelector(".display");
const customElement = document.querySelector(".custom");
const customInput = document.querySelector(".custom input");
var bill = 0 ;
var tip =  tipElement.value;
var tipAmount = 0;
displayElement.innerHTML ="$ 0";
billElement.addEventListener("change",() => {
        if (isNaN(billElement.value)) {
            window.alert("incorrect input");
        }
        else {
            bill = parseFloat(billElement.value);
            if (tipElement != "custom"){
                tipAmount = tip * bill;
                displayElement.innerHTML ="$"+` ${tipAmount}`;
            }else{
                if (customInput.value != ""){
                    var sec = parseInt(customInput.value);
                    tip = sec/100;
                    tipAmount = bill * tip;
                    displayElement.innerHTML =`$ ${tipAmount}`;
                } 
            }
        }
    });
tipElement.addEventListener("change",()=>{
    if ( tipElement.value == "custom"){
        customElement.style.display = "block";
        customF();
    }else{
        if (customElement.style.display == "block"){
            customElement.style.display = "none";
            customInput.value = "";
        }
        tip = parseFloat(tipElement.value);
        tipAmount = bill * tip;
        displayElement.innerHTML ="$"+` ${tipAmount}`;
    }
});

function customF(){
    customInput.addEventListener("change",()=>{
        if (isNaN(customInput.value)){
           window.alert("wrong value")
        }
        else{
            var sec = parseInt(customInput.value);
            tip = sec/100;
            tipAmount = bill * tip;
            displayElement.innerHTML =`$ ${tipAmount}`;
        }
    });
}