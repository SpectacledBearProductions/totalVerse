'use strict';

const button = document.getElementById('clickBtn');

button.addEventListener('click', function () {
  let money = parseInt(localStorage.getItem('money')) || 0;

  money += 10;
  localStorage.setItem('money', money);

  window.location.href = "Clicker.html";
});