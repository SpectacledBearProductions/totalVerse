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
alert("Login successful");
loadMainPage();



const button = document.getElementById('clickBtn');

if (button) {
  button.addEventListener('click', function () {
    let money = parseInt(localStorage.getItem('money')) || 0;

    money += 10;
    localStorage.setItem('money', money);

    window.location.href = "Clicker.html";
  });
}


  