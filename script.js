"use strict";
document.getElementById("userInput").value;
function save() {
  let password = document.getElementById("passwordInput").value;

  localStorage.setItem("password", password);
  alert("Saved");
}
function load() {
  let password = localStorage.getItem("password");
  if (password) {
    document.getElementById("passwordInput").value = password;
    document.getElementById("outputpassword").innerHTML =
      "Password is " + password;
    load();
  }
}

function saveuser() {
  let user = document.getElementById("userInput").value;

  localStorage.setItem("user", user);
  alert("Saved");
}
function loaduser() {
  let user = localStorage.getItem("user");
  if (user) {
    document.getElementById("userInput").value = user;
    document.getElementById("outputuser").innerHTML = "username is " + user;
    loaduser();
  }
}