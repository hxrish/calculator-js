let numbers = Array.from(document.getElementsByClassName("numberBTN"));
let operators = Array.from(document.getElementsByClassName("operatorBTN"));
let number1 = document.getElementById("number1");
let operationDisplay = document.getElementById("operation");
let number2 = document.getElementById("number2");
let specialBTN = Array.from(document.getElementsByClassName("specialBTN"));
let equal = document.getElementById("equalsBTN");
let decimal = document.getElementById("decimal");

function clear() {
  number1.innerText = "";
  number2.innerText = "";
  operationDisplay.innerText = "";
}


numbers.forEach((Element) => {
  Element.addEventListener("click", (elementsClicked) => {
    number1.innerText += Element.innerText;
  });
});

decimal.addEventListener('click', () => {
  let decimalplace = '.';
  if(number1.innerText.indexOf(decimalplace) < 0){
    number1.innerText = `${number1.innerText}.`
  }
  
})


operators.forEach((Element) => {
  if(number1 != ''){
  Element.addEventListener("click", () => {

    operationDisplay.innerHTML = `<p id="operationNow">${Element.innerText}</p>`;

    operation(operationDisplay.innerText)
  });
}
});


function operation(operator){

  let number1num = parseFloat(number1.innerText);
  let number2num = parseFloat(number2.innerText);

  switch (operator) {
    case '+':
      if(number2.innerText == ''){
        number2.innerText = number1.innerText;
        number1.innerText = ''
      }
      else{
        // number1.innerText = number2num + number1num;
        // number2.innerText = '';
      }
      break;

      case '-':
        if(number2.innerText == ''){
          number2.innerText = number1.innerText;
          number1.innerText = ''
        }
        else{
          // number1.innerText = number2num - number1num;
          // number2.innerText = '';
        }
        break;

        case '*':
          if(number2.innerText == ''){
            number2.innerText = number1.innerText;
            number1.innerText = ''
          }
          else{
            // number1.innerText = number2num * number1num;
            // number2.innerText = '';
          }
          break;

          case '/':
            if(number2.innerText == ''){
              number2.innerText = number1.innerText;
              number1.innerText = ''
            }

            // else if(number2.innerText != '' && number1.innerText == 0){
            //   number1.innerText  = 'Illegal!';
            //   number2.innerText = '';
            // }

            // else{
            //   number1.innerText = number2num / number1num;
            //   number2.innerText = '';
            // }
            // break;
    default:
      break;
  }
}

specialBTN.forEach((Element) => {
  Element.addEventListener("click", () => {
    if (Element.innerText == "C") {
      number1.innerText = number1.innerText.slice(0, -1);
    }
    if (Element.innerText == "AC") {
      clear();
    }
  });
});


equal.addEventListener('click', () => {
  if(number2.innerText == ''){
    return
  }
  else{
  let number1num = parseFloat(number1.innerText);
  let number2num = parseFloat(number2.innerText);
    switch (operationDisplay.innerText) {
      case '+':
        number1.innerText = number2num + number1num;
        number2.innerText = '';
        operationDisplay.innerText = '';
        
        break;

      case '-':
        number1.innerText = number2num - number1num;
        number2.innerText = '';
        operationDisplay.innerText = '';

        break;

      case '*':
        number1.innerText = number2num * number1num;
        number2.innerText = '';

        break;

      case '/':
        if(number2.innerText != '' && number1.innerText == 0){
          number1.innerText  = 'Illegal!';
          number2.innerText = '';
          operationDisplay.innerText = '';
        }

        else{
          number1.innerText = number2num / number1num;
          number2.innerText = '';
          operationDisplay.innerText = '';
        }
        break;
        }
  }
})
