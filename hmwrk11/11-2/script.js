let text = document.querySelector("[data-text]");
let button = document.querySelector("[data-color-btn]");
let isChanged = false

button.addEventListener("click", function() {
  if (isChanged) {
    text.style.color = "black";
  } else {
    text.style.color = "red";
  }
  isChanged = !isChanged;
});