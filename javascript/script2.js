let frontNumba = document.getElementById('front-numba');
let backNumba = document.getElementById('back-numba');
let allNumbers = Array.from(document.getElementsByClassName('numbaBTN'));
let operationSign = document.getElementById('operation');
let operatorBTN = Array.from(document.getElementsByClassName('operationBTN'));
let equals = document.getElementById('result');
let number1;
let number2;
let operator;
let hasFrontNumba;


function numbers(){
    hasFrontNumba = true;
    allNumbers.forEach(Element => {
        Element.addEventListener('click', numbersClicked => {
            frontNumba.innerText += Element.innerText;
            number1 = frontNumba.innerText;
        })
    })
}

numbers()

if (hasFrontNumba) {
    operatorBTN.forEach(Element => {
        Element.addEventListener('click', operatorClicked => {
            operationSign.innerText = Element.innerText;
            operator = operationSign.innerText;
            backNumba.innerText = frontNumba.innerText;
            frontNumba.innerText = '';
            number2 = backNumba.innerText;
        })
    })
}



equals.addEventListener('click', equalsClicked => {
    let num1 = parseInt(number1);
    let num2 = parseInt(number2);
    switch (operator) {
        case '+':
            frontNumba.innerText = num2 + num1;
            break;
        case '-':
            frontNumba.innerText = num2 - num1;
            break;

        case '*':
            frontNumba.innerText = num2 * num1;
            break;
        
        case '/':
            frontNumba.innerText = num2 / num1;
            break;
        default:
            break;
    }
})




