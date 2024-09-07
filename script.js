import quotes from "./quotes.js";

const plus = document.getElementById("plus");
const minu = document.getElementById("minus");
const previous = document.getElementById("previous");
const randomQuote = document.getElementById("random");
const next = document.getElementById("next");
const title = document.getElementById("title");
const theme = document.getElementById("theme-toggle");
const categoryOptions = document.getElementById("categoryOptions");
let currentIndex = 0;
let filteredQuotes = quotes;
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

//display quote

function show(display) {
  if (filteredQuotes.length > 0)
    title.textContent = filteredQuotes[display].title;
  else title.textContent = " Quotes";
}

//change category

categoryOptions.addEventListener("change", () => {
  currentIndex = 0;
  const selectedCategory = categoryOptions.value;

  if (selectedCategory === "all") {
    filteredQuotes = quotes;
  } else {
    filteredQuotes = quotes.filter(
      (quote) => quote.category === selectedCategory
    );
  }

  show(currentIndex);
});

//next

next.addEventListener("click", () => {
  if (currentIndex < filteredQuotes.length - 1) {
    currentIndex++;
    show(currentIndex);
  }
});

//previous

previous.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    show(currentIndex);
  }
});

//random

randomQuote.addEventListener("click", () => {
  currentIndex = Math.floor(Math.random() * filteredQuotes.length);
  show(currentIndex);
});

show(currentIndex);
