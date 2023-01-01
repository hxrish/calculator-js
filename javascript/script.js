let one = document.getElementById("number_one");
let result = document.getElementById("result_text");
let all_btn = Array.from(document.getElementsByClassName("number_btn"));
let add = document.getElementById('add');
let sub = document.getElementById('sub');
let multiply = document.getElementById('multiply');
let divide = document.getElementById('divide');
let a = [];
let number1;

all_btn.forEach((Element) => {
  Element.addEventListener("click", (buttons_clicked) => {
    result.textContent += `${Element.textContent}`;
    console.log(Element)
    a.push(`${Element.textContent}`);
    number1 = result.textContent;
    console.log(number1);
  });
});







