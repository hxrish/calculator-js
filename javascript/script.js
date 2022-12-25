let one = document.getElementById("number_one");
let result = document.getElementById("result_text");
let all_btn = Array.from(document.getElementsByClassName("number_btn"));
one.addEventListener("click", one_click);
function one_click(e) {
  result.textContent += "1";
}

all_btn.forEach((Element) => {
  Element.addEventListener("click", (buttons_clicked) => {
    result.textContent += `${Element.innerHTML}`;
  });
});


