let generateBtn = document.querySelector('#generateBtn');
let geneateNum = document.querySelector('#geneateNum');
let pinType = document.querySelector('#pinTyper');
let submitBtn = document.querySelector('#submitBtn');
let pinMatchStatusOn = document.querySelector('.pinMatchStatusOn');
let pinMatchStatusOff = document.querySelector('.pinMatchStatusOff');

generateBtn.addEventListener('click',randomPinGenerator);
submitBtn.addEventListener('click',checkPin);
function randomPinGenerator(){
    var val = Math.floor(1000 + Math.random() * 9000);
    geneateNum.value = val;
    return val;
}

function clearAll(){
    pinType.children[0].value = "";
}

function display(value){
    pinType.children[0].value = pinType.children[0].value+value;
}

function clearOneByOne(){
    var inputResult = pinType.children[0].value;
    var removeValue = inputResult.slice(0, inputResult.length - 1);
    pinType.children[0].value = removeValue;
}

// Try Left Again 
// function tryLeft(id) {
//     var tryAgain = document.getElementById(id).innerHTML;
//     document.getElementById(id).innerHTML -= 1;
//     if (tryAgain == "1") {
//         disableBtn('submit');
//         reaload();
//     }
// }

function checkPin(){
    if (geneateNum.value == 0) {
        geneateNum.value = 'Plz Generate Number First';
    }else{
        if(pinType.children[0].value.length != 4){
            document.querySelector('.pinDigitNotify').innerText = "Press the 4 digit number";
        }else{
            if(geneateNum.value == pinType.children[0].value){
                pinMatchStatusOff.style.display = 'none';
                pinMatchStatusOn.style.display = 'block';
            }else{
                pinMatchStatusOff.style.display = 'block';
                pinMatchStatusOn.style.display = 'none';
                // tryLeft();
            }
        }
    }
    
}



