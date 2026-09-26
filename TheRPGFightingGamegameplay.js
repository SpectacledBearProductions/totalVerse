function disapper() {
  document.getElementById("play").style.display = "none";
  count++;
  updateDisplay();
}
let count = 500;
let health = 100;
let strength = 100;
let opponethealth = 500;


function updateDisplay() {
  document.getElementById("counter").textContent = count;
}

function updateHealth() {
  document.getElementById("health").textContent = health;
  if (health === 100) {
    health += 100;
    updateHealth();
  }
}

function updateMoney(amount) {
  document.getElementById("subtract").textContent = amount;
}

function lowerMoney(money) {
  if (money >= 200) {
    console.log("You have enough money");
  } else {
    console.log("Not enough money");
  }
}

function updatestrength() {
  document.getElementById("strengh").textContent = strength;
  if (strength === 100) {
    strength += 100;
    updatestrength();
  }
}

function decrease() {
  if (count >= 100) {
    count -= 100;
    health += 100;
    updateDisplay();
    updateHealth();
  }
}

function decreaseforstrengh() {
  if (count >= 100) {
    count -= 100;
    strength += 100;
    updateDisplay();
    updatestrength();
  }
}


function decreaseHeath(){
  if (health >= 50) {
    health -= 50;
     updateHealth();
  }
}