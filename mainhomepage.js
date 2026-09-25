'use strict';

function loadMainPage() {
  let user = localStorage.getItem("user");
  let password = localStorage.getItem("password");

  if (user && password) {
    document.getElementById("outputuser").innerHTML = "Welcome, " + user;
  } else {
    window.location.href = "Login.html";
  }
}


const button = document.getElementById('clickBtn');

if (button) {
  button.addEventListener('click', function () {
    let money = parseInt(localStorage.getItem('money')) || 0;

    money += 1;
    localStorage.setItem('money', money);

    window.location.href = "Clicker.html";
  });
}
