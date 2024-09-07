const plus = document.getElementById("plus");
const minu = document.getElementById("minus");
const previous = document.getElementById("previous");
const randomQuote = document.getElementById("random");
const next = document.getElementById("next");
const title = document.getElementById("title");
const theme = document.getElementById("theme-toggle");

//theme
theme.addEventListener("click", () => {
  const body = document.body;

  if (body.classList.contains("light")) {
    body.classList.remove("light");
    body.classList.add("dark");
    theme.textContent = "Switch to Light Mode";
  } else {
    body.classList.remove("dark");
    body.classList.add("light");
    theme.textContent = "Switch to Dark Mode";
  }
});

//font

plus.addEventListener("click", () => {
  let fontsize = window
    .getComputedStyle(title, null)
    .getPropertyValue("font-size");
  title.style.fontSize = parseInt(fontsize) + 1 + "px";
});

minu.addEventListener("click", () => {
  let fontsize = window
    .getComputedStyle(title, null)
    .getPropertyValue("font-size");
  title.style.fontSize = parseInt(fontsize) - 1 + "px";
});
