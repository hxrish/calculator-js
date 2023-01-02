let numbers = Array.from(document.getElementsByClassName('numberBTN'));
let operators = Array.from(document.getElementsByClassName('operatorBTN'));
let number1 = document.getElementById('number1');
let operationDisplay = document.getElementById('operation');
let number2 = document.getElementById('number2');

numbers.forEach(Element => {
    Element.addEventListener('click', elementsClicked => {
        number1.innerText += Element.innerText;
    })
})