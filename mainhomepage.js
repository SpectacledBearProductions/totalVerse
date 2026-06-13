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


let money = 9;
function updateMoney() {
  document.getElementById("money").textContent = money; 
}
function earnMoney() {
  money += 10; 
  updateMoney(); 
}

  