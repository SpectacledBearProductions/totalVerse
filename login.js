"use strict";

function login() {
  let user = document.getElementById("userInput").value;
  let password = document.getElementById("passwordInput").value;

  let savedUser = localStorage.getItem("user");
  let savedPassword = localStorage.getItem("password");

  if (user === savedUser && password === savedPassword) {
    localStorage.setItem("user", user);
    localStorage.setItem("password", password);

    const goButton = document.getElementById("submit");
    goButton.addEventListener("click", function () {
      window.location.href = "mainhomepage.html";
    });

  } else if (user && password) {
    alert("wrong password or user name");

  } else {
    alert("Please fill in all fields");
  }
}