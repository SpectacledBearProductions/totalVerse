'use strict'
let money = 9;

function updateDisplay() {
  document.getElementById("money").textContent = money;
}
function earnMoney() {
  money += 10; 
  updateMoney(); 
}

  