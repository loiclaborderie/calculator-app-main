const range = document.getElementById("theme-range");
const body = document.querySelector("body");
const input = document.querySelector(".result");
const reset = document.querySelector(".btn-reset");
const del = document.querySelector(".btn-del");
const zero = document.querySelector(".btn-zero");
const one = document.querySelector(".btn-un");
const two = document.querySelector(".btn-deux");
const three = document.querySelector(".btn-trois");
const four = document.querySelector(".btn-quatre");
const five = document.querySelector(".btn-cinq");
const six = document.querySelector(".btn-six");
const seven = document.querySelector(".btn-sept");
const eight = document.querySelector(".btn-huit");
const nine = document.querySelector(".btn-neuf");
const point = document.querySelector(".btn-point");
const divide = document.querySelector(".btn-divise");
const times = document.querySelector(".btn-fois");
const plus = document.querySelector(".btn-plus");
const minus = document.querySelector(".btn-moins");
const equal = document.querySelector(".btn-egal");

body.className = "theme-1";
range.addEventListener("input", () => {
  const value = range.value;

  if (value === "1") {
    body.className = "theme-1";
  } else if (value === "2") {
    body.className = "theme-2";
  } else if (value === "3") {
    body.className = "theme-3";
  }
});
input.value = 369;

reset.addEventListener("click", () => {
  input.value = "";
});
del.addEventListener("click", () => {
  input.value = input.value.substring(0, input.value.length - 1);
});
zero.addEventListener("click", () => {
  input.value += 0;
});
one.addEventListener("click", () => {
  input.value += 1;
});
two.addEventListener("click", () => {
  input.value += 2;
});
three.addEventListener("click", () => {
  input.value += 3;
});
four.addEventListener("click", () => {
  input.value += 4;
});
five.addEventListener("click", () => {
  input.value += 5;
});
six.addEventListener("click", () => {
  input.value += 6;
});
seven.addEventListener("click", () => {
  input.value += 7;
});
eight.addEventListener("click", () => {
  input.value += 8;
});
nine.addEventListener("click", () => {
  input.value += 9;
});
point.addEventListener("click", () => {
  input.value += ".";
});
times.addEventListener("click", () => {
  input.value += "*";
});
divide.addEventListener("click", () => {
  input.value += "/";
});
plus.addEventListener("click", () => {
  input.value += "+";
});
minus.addEventListener("click", () => {
  input.value += "-";
});
equal.addEventListener("click", () => {
  if (/[a-z,]/i.test(input.value)) {
    input.value = "You can only type numbers";
  } else {
    try {
      input.value = eval(input.value);
    } catch {
      input.value = "Error, invalid expression typed";
    }
  }
});

window.addEventListener("keydown", (e) => {
  console.log(e.key);
  switch (e.key) {
    case "Enter":
      equal.click();
      break;
    case "+":
      plus.click();
      break;
    case "-":
      minus.click();
      break;
    case "*":
      times.click();
      break;
    case "/":
      divide.click();
      break;
    default:
      if (/[0-9]/.test(e.key)) {
        input.value += e.key;
      }
      break;
  }
});
