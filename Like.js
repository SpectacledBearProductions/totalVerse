"Use strict";
let like = parseInt(localStorage.getItem("count")) || 0;
let clicked = false;
const button = document.getElementById("like");
const display = document.getElementById("display");
display.textContent = like;
button.addEventListener("click", function () {
  if (!clicked) {
    like++;
    localStorage.setItem("count", like);
    display.textContent = like;
    clicked = true;
  }
});
