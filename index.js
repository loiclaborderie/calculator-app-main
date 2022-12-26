const range = document.getElementById("theme-range");
const body = document.querySelector("body");
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
console.log(range.value);
