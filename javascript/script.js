let numbers = Array.from(document.getElementsByClassName('numberBTN'));
let operators = Array.from(document.getElementsByClassName('operatorBTN'));
let number1 = document.getElementById('number1');
let operationDisplay = document.getElementById('operation');
let number2 = document.getElementById('number2');
let specialBTN = Array.from(document.getElementsByClassName('specialBTN'));


function clear(){
    number1.innerText = '';
    number2.innerText = '';
    operationDisplay.innerText = '';
}


function getInput(){
        numbers.forEach(Element => {
            Element.addEventListener('click', elementsClicked => {
                number1.innerText += Element.innerText;
            })
        })
}

operators.forEach(Element => {
    Element.addEventListener('click', () => {
        operationDisplay.innerHTML = `<p id="operationNow">${Element.innerText}</p>`;
    })
})

specialBTN.forEach(Element => {
    Element.addEventListener('click', () => {
        if (Element.innerText == 'C'){
            number1.innerText = number1.innerText.slice(0, -1);
        }
        if (Element.innerText == 'AC'){
            clear()
        }
    })
})
